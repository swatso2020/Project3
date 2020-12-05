const router = require("express").Router();
const placesController= require("../../controller/places");



router.route("/")
  .get(placesController.yelpApi)


module.exports = router;