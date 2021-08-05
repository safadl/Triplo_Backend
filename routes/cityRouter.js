const controller = require("../controllers/cityController");
const upload=require('../middlewares/upload')
module.exports=function(router){
    
    router.post('/api/city/addCity',upload.single('cityImage'),controller.addCity)
    router.post('/api/city/assignCity/:countryid/:cityid',controller.assignCity)
    router.get('/api/cities/getAll',controller.getAllCities)
    router.patch('/api/updateCity/:city_id',upload.single('cityImage'),controller.updateCity)
    router.delete('/api/deleteCity/:city_id',controller.deleteCity)
    router.delete('/api/deleteAllCities',controller.deleteAllCities)



}
