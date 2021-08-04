const controller = require("../controllers/countryController");
const upload=require('../middlewares/upload')
module.exports=function(router){
    router.post('/api/addCountry',upload.single('image'),controller.addCountry)
    router.get('/api/countries/getAll',controller.AllCountries)
    router.patch('/api/updateCountry/:country_id',upload.single('image'),controller.updateCountry)
    router.delete('/api/deleteCountry/:country_id',controller.deleteCountry)
    router.delete('/api/deleteAllCountries',controller.deleteAllCountries)


}
