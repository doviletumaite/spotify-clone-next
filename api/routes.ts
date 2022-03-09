import express from "express"

const apiRoutes = express.Router()

apiRoutes.get("/",async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
})

export default apiRoutes