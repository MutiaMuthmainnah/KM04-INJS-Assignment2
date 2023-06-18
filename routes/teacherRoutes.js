const express = require("express")
const router = express.Router()
const TeacherController = require('../controllers/teacherController')
const { authentication } = require("../middleware/auth")

router.use(authentication)
router.get("/", TeacherController.getAllTeachers)


module.exports = router