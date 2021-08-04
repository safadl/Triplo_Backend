const City=require('../models/country/city');

module.exports={
    addCity:async(req,res)=>{
        let cityImg;
        if(req.file){
            cityImg=req.file.path
        }
        const city=await City.create({
            cityName:req.body.cityName,
            country:req.body.countryId,
            cityImage:cityImg
        
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