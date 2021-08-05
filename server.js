const express = require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const app = express();
var multer=require('multer');

const dbConfig = require("./config/db.config"); 

var corsOptions={
    origin:"http://localhost:8001"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded())

// app.use(express.urlencoded({extended: true}));
// app.use(multer().single())

app.use('/uploads',express.static('uploads'))


app.get('/',(req,res)=>{
    res.json({message:"Welcome to Triplo"});
});
// routes
require('./routes/auth.routes')(app);
require('./routes/countryRouter')(app);
require('./routes/cityRouter')(app);
require('./routes/restoRouter')(app);

require('./routes/user.routes')(app);
const PORT= process.env.PORT || 8000;app.listen(PORT,()=>{
    console.log('Server is running on port ${PORT}.');
})

const db = require("./models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex:true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// initial() function helps us to create 3 important rows in roles collection.


  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }
