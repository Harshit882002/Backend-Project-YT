import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// routes import 

import userRouter from "./routes/user.route.js"

// routes declaration
app.use("/api/v1/users", userRouter)

export {app}

// URL se jab bhi koi data ata hai vah req.params se ata hai.

// req.body me differnt different form means (json) me data ata hai