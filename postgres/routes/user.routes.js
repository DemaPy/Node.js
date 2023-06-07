const Router = require("express")
const router = new Router()
const userController = require("../controllers/user.controller")


router.get("/user", userController.getUsers)
router.get("/user/:id", userController.getUser)
router.post("/user", userController.createUser)
router.put("/user", userController.updateUser)
router.delete("/user/:id", userController.deletUser)


module.exports = router