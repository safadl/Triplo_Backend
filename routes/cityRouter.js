const controller = require("../controllers/cityController");
const upload=require('../middlewares/upload')
module.exports=function(router){
    router.post('/api/city/addCity',upload.single('cityImage'),controller.addCity)
    router.post('/api/city/assignCity/:countryid/:cityid',controller.assignCity)


}
