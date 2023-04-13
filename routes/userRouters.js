const express = require("express")
const router = express.Router()
const UserController = require('../controllers/userController')
const { route } = require("./teacherRoutes")

//router.post("/", UserController.register)
router.get("/", UserController.getAllUsers)
router.post("/register", UserController.register)
router.post("/login", UserController.login)

module.exports = router