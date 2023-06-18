const express = require("express")
const router = express.Router()
const {UsersController} = require('../controllers/userController')
const { route } = require("./teacherRoutes")

//router.post("/", UserController.register)
router.get("/", UsersController.getAllUsers)
//router.post("/register", UserController.register)
router.post("/login", UsersController.login)

module.exports = router 