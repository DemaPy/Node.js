const Router = require("express")
const router = new Router()
const postController = require("../controllers/post.controller")


router.get("/post", postController.getPosts)
router.get("/posts", postController.getPost)
router.post("/post", postController.createPost)
router.put("/post", postController.updatePost)
router.delete("/post", postController.deletePost)


module.exports = router