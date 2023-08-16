const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require("dotenv").config()

// using common middlewares
app.use(cors())
app.use(bodyParser.json())

// configuring express routes
const fileRoutes = require("./routes/files")
const authRoutes = require("./routes/auth")
app.use("/auth",authRoutes)
app.use("/files",fileRoutes)



// database connections
mongoose.connect("mongodb+srv://ashish1322:DN4jzZkz8voDHsxY@cluster0.88yqf.mongodb.net/?retryWrites=true")

.then(() => console.log("Database Connnected"))
.catch(() => console.log("Database Connection Failed"))



app.listen(3001,() => console.log("App is running"))