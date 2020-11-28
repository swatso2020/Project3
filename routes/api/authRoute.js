const router = require("express").Router();
const authController=require("../../controllers/authController");

// Matches with "/api/posts"

// Matches with "/api/posts/:id"
router
  .route("/login").post(authController.login).get(authController.authenticate)

module.exports = router;