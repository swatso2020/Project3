const testController=require('../../controllers/testController');
const router = require("express").Router();



// Matches with "/api/posts"

// Matches with "/api/posts/:id"
router.route("/test").get(testController.register);

module.exports = router;