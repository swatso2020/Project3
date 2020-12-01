const router = require("express").Router();
const placesController= require("../../controller/places");



router.route("/")
  .get(placesController.findAll)
  .post(placesController.create);

module.exports = router;