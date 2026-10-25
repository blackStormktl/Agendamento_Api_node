import express from "express"
import "dotenv/config"
import cors from "cors";
import { route } from "./route";

const app =  express()
app.use(express.json())
app.use(route)
app.use(cors())

const port = process.env.PORT || 3001

app.listen(port,()=>{
    console.log("servidor online",port)
})