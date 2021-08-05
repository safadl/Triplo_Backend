const controller = require("../controllers/hotelController");
const upload=require('../middlewares/upload')
module.exports=function(router){
    
    router.post('/api/hotel/addHotel',upload.single('hotelImage'),controller.addHotel)
    router.post('/api/hotel/assignHotel/:cityid/:hotelid',controller.assignHotel)
    router.get('/api/hotels/getAll',controller.getAllHotels)
    router.patch('/api/updateHotel/:hotel_id',upload.single('hotelImage'),controller.updateHotel)
    router.delete('/api/deleteHotel/:hotel_id',controller.deleteHotel)
    router.delete('/api/deleteAllHotels',controller.deleteAllHotels)



}