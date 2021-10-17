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
            countryName:req.body.countryName,

            cityDescription:req.body.cityDescription,
            cityImage:cityImg
        
        })

        await city.save(   
        )   
        
        .then(city=>res.json(city))
            .catch(err=>
              { 
                console.log(err)
              }
                )
        
      
            
            // catch(e){
            //     console.log(e);
            //     next(err);
            //     res.status(422).send({ 'message': 'Validation error' });

            // }
    },
    assignCity:async(req,res)=>{
        const city=await City.findById(req.params.cityid)
        const country=await Country.findById(req.params.countryid)
        country.cities.push(city)
         country.populate('cities')
        country.save();
        res.json(country)
    },
    getAllCities:async(req,res)=>{
        const city=await City.find().then(cities=>res.json(cities))
        
        .catch(err=>console.log(err));


    },
    updateCity:async(req,res)=>{
        let cityImg;
    
        if(req.file){
            cityImg=req.file.path
        }
  
        City.findByIdAndUpdate(req.params.city_id, {
            cityName:req.body.cityName,
            country:req.body.countryId,
            countryName:req.body.countryName,
            cityDescription:req.body.cityDescription,
            cityImage:cityImg
        
        },{new: true})
        .then(city => {
            if(!city) {
                return res.status(404).send({
                    message: "City not found with id " + req.params.city_id
                });
            }
            res.send(city);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "City not found with id " + req.params.city_id
                });                
            }
            return res.status(500).send({
                message: "Error updating city with id " + req.params.city_id
            });
        });
    },

    deleteCity:async(req,res)=>{
        City.findByIdAndDelete(req.params.city_id)
        .then(city => {
            if(!city) {
                return res.status(404).send({
                    message: "City not found with id " + req.params.city_id
                });
            }
            res.send({message: "City deleted successfully!",city});
        
    })
    .catch(
        err=>{
            return res.status(500).send({
                message: "Error deleting city with id " + req.params.city_id
            });
        }
    )
    },
  
    deleteAllCities:async(req,res)=>{
        
       
        City.deleteMany()
        .then(()=>{
          
            res.send({message:"All cities deleted successfully!"})
        }
            
            )
            .catch(err=>{console.log(err)})

        
    }

}