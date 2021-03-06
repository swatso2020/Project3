const router = require("express").Router();
const placesRoutes = require("./placesRoute");
const yelp = require("./yelp")
const yelpfind = require("./yelpfind")
const yp = require("./yp")
const account = require("./account")
const authroutes = require("./authRoute")


// places route
router.use("/auth",authroutes)
router.use("/places", placesRoutes);
router.use("/yelp", yelp)
router.use("/yelpfind", yelpfind)
router.use("/yp",yp)
router.use("/createUser", account)

module.exports = router