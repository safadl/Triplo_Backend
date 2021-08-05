const mongoose=require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const GeoSchema=require('./geoLocation')

const City=mongoose.model(
"City",
new mongoose.Schema({
    cityName:{type:String, uniqueCaseInsensitive: true},
    country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
    cityDescription:String,
    cityImage:{type:String},
    restos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Restaurant'
        }
    ],
    hotels:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hotel'
        }
    ],
    locationCity:GeoSchema


}).plugin(uniqueValidator, { type: 'mongoose-unique-validator' })

)


module.exports=City;