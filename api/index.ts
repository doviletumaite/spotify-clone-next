import cors from "cors"
import express from "express"
import apiRoutes from "./routes"

const app = express()

app.use(cors())

app.use("/api", apiRoutes)

app.listen(process.env.PORT)