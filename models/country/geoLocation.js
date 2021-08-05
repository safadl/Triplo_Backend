const mongoose=require('mongoose');
const GeoSchema=new mongoose.Schema({
type:{type:String,default:"Point"},
coordinates:{
    type:[Number],
    index:'2dsphere'
}
})
module.exports=GeoSchema;