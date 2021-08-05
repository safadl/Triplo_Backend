const Hotel=require('../models/country/hotel');

module.exports={
    
    addHotel:async(req,res)=>{
      
        let hotelImg;
        if(req.file){
            hotelImg=req.file.path
        }
  
        const hotel=await Hotel.create({
            hotelName:req.body.HotelName,
            city:req.body.cityId,
            hotelImage:hotelImg,
            hotelDescription:hotelDescription
        
        })

        await hotel.save(   
        )   
        
        .then(hotel=>res.json(hotel))
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
    assignHotel:async(req,res)=>{
        const hotel=await Hotel.findById(req.params.hotelid)
        const city=await City.findById(req.params.cityid)
        country.hotels.push(hotel)
         country.populate('hotels')
        country.save();
        res.json(city)
    },
    getAllHotels:async(req,res)=>{
        const hotel=await Hotel.find().then(hotels=>res.json(hotels))
        
        .catch(err=>console.log(err));


    },
    updateHotel:async(req,res)=>{
        let hotelImg;
    
        if(req.file){
            hotelImg=req.file.path
        }
  
        Hotel.findByIdAndUpdate(req.params.hotel_id, {
            hotelName:req.body.HotelName,
            city:req.body.cityId,
            hotelImage:hotelImg,
            hotelDescription:hotelDescription

        
        },{new: true})
        .then(hotel => {
            if(!hotel) {
                return res.status(404).send({
                    message: "Hotel not found with id " + req.params.hotel_id
                });
            }
            res.send(hotel);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Hotel not found with id " + req.params.hotel_id
                });                
            }
            return res.status(500).send({
                message: "Error updating hotel with id " + req.params.hotel_id
            });
        });
    },

    deleteHotel:async(req,res)=>{
        Hotel.findByIdAndDelete(req.params.hotel_id)
        .then(hotel => {
            if(!hotel) {
                return res.status(404).send({
                    message: "Hotel not found with id " + req.params.hotel_id
                });
            }
            res.send({message: "Hotel deleted successfully!",hotel});
        
    })
    .catch(
        err=>{
            return res.status(500).send({
                message: "Error deleting hotel with id " + req.params.hotel_id
            });
        }
    )
    },
  
    deleteAllHotels:async(req,res)=>{
        
       
        Hotel.deleteMany()
        .then(()=>{
          
            res.send({message:"All Hotels deleted successfully!"})
        }
            
            )
            .catch(err=>{console.log(err)})

        
    }

}