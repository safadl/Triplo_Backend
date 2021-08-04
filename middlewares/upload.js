const multer=require('multer');
// const GridGsStorage=require('multer-gridfs-storage');
const path=require('path');
// const storage=new GridGsStorage(
//     {
//         url:process.env.DB,
//         options:{useNewUrlParser:true, useUnifiedTopology:true, 
//         file:(req,res)=>{
//             const match=["image/png"]
//         }}
//     }
// );

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        let ext=path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})
var upload=multer({
    storage:storage,
    fileFilter:function(req,file,callback){
        if(file.mimetype=="image/png"||file.mimetype=="image/jpg"||file.mimetype=="image/jpeg")
        {
            callback(null,true)

        }
        else{
            console.log('only png and jpg file supported')
            callback(null,false)
        }
    }, 
       
    
})
module.exports = upload