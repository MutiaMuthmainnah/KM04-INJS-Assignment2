const express = require("express")
const app = express()
const PORT = 3000
const teacherRoutes = require('./routes/teacherRoutes')
const userRouters = require('./routes/userRouters')


app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use("/users", userRouters)
app.use("/teachers", teacherRoutes)

app.listen(PORT, () => {
    console.log("App is Running on port : ", PORT);
})