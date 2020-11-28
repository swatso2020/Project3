const router = require("express").Router();
const usermodel = require("../../models/userModel")
const postsController = require("../../controller/postController");

// Matches with "/api/posts"
router.route("/").get(postsController.findAll).post(postsController.create);

// Matches with "/api/posts/:id"
router.route("/:id").get(postsController.findById).put(postsController.update).delete(postsController.remove);

module.exports = router;