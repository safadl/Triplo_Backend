const Restaurant = require("../models/country/restaurant");

module.exports = {
  addResto: async (req, res) => {
    let restoImg;
    if (req.file) {
      restoImg = req.file.path;
    }

    const resto = await Restaurant.create({
      restoName: req.body.RestoName,
      city: req.body.cityId,
      cityName: req.body.CityName,
      restoImage: restoImg,
      loca: req.body.restoLoc,
    });

    await resto
      .save()

      .then((resto) => res.json(resto))
      .catch((err) => {
        console.log(err);
      });
  },
  assignResto: async (req, res) => {
    const resto = await Resto.findById(req.params.restoid);
    const city = await City.findById(req.params.cityid);
    country.restos.push(resto);
    country.populate("restos");
    country.save();
    res.json(city);
  },
  getAllRestos: async (req, res) => {
    const resto = await Restaurant.find()
      .then((restos) => res.json(restos))

      .catch((err) => console.log(err));
  },
  updateRestaurant: async (req, res) => {
    let restoImg;

    if (req.file) {
      restoImg = req.file.path;
    }

    Restaurant.findByIdAndUpdate(
      req.params.resto_id,
      {
        restoName: req.body.RestoName,
        city: req.body.cityId,
        restoImage: restoImg,
      },
      { new: true }
    )
      .then((resto) => {
        if (!resto) {
          return res.status(404).send({
            message: "Restaurant not found with id " + req.params.resto_id,
          });
        }
        res.send(resto);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Restaurant not found with id " + req.params.resto_id,
          });
        }
        return res.status(500).send({
          message: "Error updating restaurant with id " + req.params.resto_id,
        });
      });
  },

  deleteResto: async (req, res) => {
    Restaurant.findByIdAndDelete(req.params.resto_id)
      .then((resto) => {
        if (!resto) {
          return res.status(404).send({
            message: "Resto not found with id " + req.params.resto_id,
          });
        }
        res.send({ message: "Resto deleted successfully!", resto });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Error deleting restaurant with id " + req.params.resto_id,
        });
      });
  },

  deleteAllRestos: async (req, res) => {
    Restaurant.deleteMany()
      .then(() => {
        res.send({ message: "All restos deleted successfully!" });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
