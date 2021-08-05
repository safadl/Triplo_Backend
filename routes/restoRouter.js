const controller = require("../controllers/restaurantController");
const upload=require('../middlewares/upload')
module.exports=function(router){
    
    router.post('/api/resto/addResto',upload.single('restoImage'),controller.addResto)
    router.post('/api/resto/assignResto/:cityid/:restoid',controller.assignResto)
    router.get('/api/restos/getAll',controller.getAllRestos)
    router.patch('/api/updateResto/:resto_id',upload.single('restoImage'),controller.updateRestaurant)
    router.delete('/api/deleteResto/:resto_id',controller.deleteResto)
    router.delete('/api/deleteAllRestos',controller.deleteAllRestos)



}