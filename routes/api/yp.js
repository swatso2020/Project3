const router = require("express").Router();
const placesController= require("../../controller/places");



router.route("/")
  .get(placesController.ypFind)


module.exports = router;