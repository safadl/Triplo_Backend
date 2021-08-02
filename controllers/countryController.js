const Country=require('../models/country/country');
const City=require('../models/country/city');

// exports.addCountry=(req,res)=>{
//     const country=new Country({
//         countryName:req.body.countryName,
//         countryDescription:req.body.countryDescription,

//     })
//     country.save((err, country) => {
//         if (err) {
//           res.status(500).send({ message: err });
//           return;
//         }
//         res.json(country)
//     })
// }
module.exports={
    addCountry:async(req,res)=>{
        const country=await Country.create({
            countryName:req.body.countryName,
            countryDescription:req.body.countryDescription,

        });
        
        await country.save().then(country=>res.json(country))
        .catch(err=>console.log(err));

    },
    AllCountries:async(req,res)=>{
        const country=await Country.find().then(countries=>res.json(countries))
        
        .catch(err=>console.log(err));


    },
    addCity:async(req,res)=>{
    const city=await City.create({
        cityName:req.body.cityName,
        country:req.body.countryId
    
    })
//const country=await Country.findById(req.params.countryid)
//console.log("country id"+req.params.countryid)

    

    await city.save().then(city=>res.json(city))
        .catch(err=>console.log(err));
        //  country.cities.push(city)

},
assignCity:async(req,res)=>{
    const city=await City.findById(req.params.cityid)
    const country=await Country.findById(req.params.countryid)
    country.cities.push(city)
     country.populate('cities')
    country.save();
    res.json(country)
}

}