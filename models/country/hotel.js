const mongoose=require('mongoose');
const GeoSchema=require('./geoLocation')
var uniqueValidator = require('mongoose-unique-validator');

const Hotel=mongoose.model(
"Hotel",
new mongoose.Schema({
    hotelName:{type:String, uniqueCaseInsensitive: true},
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
    hotelImage:{type:String},
    hotelDescription:{type:String},
    locationHotel:GeoSchema

}).plugin(uniqueValidator, { type: 'mongoose-unique-validator' })
)


module.exports=Hotel;