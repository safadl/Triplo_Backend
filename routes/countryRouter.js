const controller = require("../controllers/countryController");
module.exports=function(router){
    router.post('/api/addCountry',controller.addCountry)
    router.get('/api/countries/getAll',controller.AllCountries)
    router.post('/api/countries/addCity',controller.addCity)
    router.post('/api/countries/assignCity/:countryid/:cityid',controller.assignCity)


}
