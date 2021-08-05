const mongoose=require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const GeoSchema=require('./geoLocation')

const Restaurant=mongoose.model(
"Restaurant",
new mongoose.Schema({
    restoName:{type:String, uniqueCaseInsensitive: true},
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
    restoImage:{type:String},
    locationResto:GeoSchema


}).plugin(uniqueValidator, { type: 'mongoose-unique-validator' })
)


module.exports=Restaurant;