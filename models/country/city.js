const mongoose=require('mongoose');
const City=mongoose.model(
"City",
new mongoose.Schema({
    cityName:String,
    country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
    cityImage:{type:String}

})

);
module.exports=City;