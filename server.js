require("dotenv").config()
const express = require("express")
const userModel = require("./models/user.model")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello muxtor")
})

app.post("/users",async(req,res)=>{
    const {username,password} = req.body
    const data = await userModel.create({username,password})
    console.log("Malumotlar: ",data)
    return res.json(data)
})
const PORT = process.env.PORT || 3000;
const bootstrap = async()=>{
    await mongoose.connect(process.env.DB_URL).then(()=>console.log("Malumotlar bazasiga ulandi")).catch(()=>console.log("Malumotlar bazasiga ulanishda xatolik"))
    app.listen(PORT,'0.0.0.0',()=>console.log("Server running"))
}
bootstrap()
