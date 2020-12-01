const router = require("express").Router();
const placesRoutes = require("./placesRoute");

// places route
router.use("/places", placesRoutes);

module.exports = router;