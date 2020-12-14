const router = require("express").Router();
const placesController= require("../../controller/places");



router.route("/")
  .get(placesController.findAll)
  .post(placesController.create)
  


  router
  .route("/:id")
  .get(placesController.findById)
  .put(placesController.update)
  .delete(placesController.remove);

module.exports = router;