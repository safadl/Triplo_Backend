const mongoose=require('mongoose');
const Country = mongoose.model('Country', 
new mongoose.Schema({
  countryName:String,
  countryDescription:String,
  CountryImage:{
      data:Buffer,
      contentType:String
  },
  cities:[
      {
          type:mongoose.Schema.Types.ObjectId,
          ref:'City'
      }
  ]

}));
module.exports=Country;