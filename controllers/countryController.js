const Country=require('../models/country/country');
const City=require('../models/country/city');
const countryRouter = require('../routes/countryRouter');



module.exports={
    
    addCountry:async(req,res)=>{
        let countryImg;
        if(req.file){
            countryImg=req.file.path
        }
        const country=await Country.create({
            countryName:req.body.countryName,
            countryDescription:req.body.countryDescription,
            countryImage:countryImg

        });

        
        await country.save().then(country=>res.json(country))
        .catch(err=>console.log(err));

    },
    AllCountries:async(req,res)=>{
        const country=await Country.find().then(countries=>res.json(countries))
        
        .catch(err=>console.log(err));


    },
    updateCountry:async(req,res)=>{
        let countryImg;
    
        if(req.file){
            countryImg=req.file.path
        }
  
        Country.findByIdAndUpdate(req.params.country_id, {
            countryName:req.body.countryName,
            countryDescription:req.body.countryDescription,
           countryImage:countryImg,
        },{new: true})
        .then(country => {
            if(!country) {
                return res.status(404).send({
                    message: "Country not found with id " + req.params.country_id
                });
            }
            res.send(country);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Country not found with id " + req.params.country
                });                
            }
            return res.status(500).send({
                message: "Error updating country with id " + req.params.country
            });
        });
    },
    deleteCountry:async(req,res)=>{
        Country.findByIdAndDelete(req.params.country_id)
        .then(country => {
            if(!country) {
                return res.status(404).send({
                    message: "Country not found with id " + req.params.country_id
                });
            }
            res.send({message: "Country deleted successfully!",country});
        
    })
    .catch(
        err=>{
            return res.status(500).send({
                message: "Error deleting country with id " + req.params.country
            });
        }
    )
    },
  
    deleteAllCountries:async(req,res)=>{
        
       
        Country.deleteMany()
        .then(()=>{
          
            res.send({message:"All countries deleted successfully!"})
        }
            
            )
            .catch(err=>{console.log(err)})

        
    }
   


}