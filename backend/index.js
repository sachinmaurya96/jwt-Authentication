const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./routes/user")
const server = express()

//middleware
server.use(express.json())
server.use(cors())

server.use("/user",userRouter.router)

server.get("/",(req,res)=>{
    res.json({message:"success"})
})

main().catch(err=>console.log(err))
async function main(){
    await mongoose.connect("mongodb+srv://nitinmaurya969543:hndpm4801c@cluster0.eyf5z99.mongodb.net/user?retryWrites=true&w=majority")
    console.log("dbs connect")
}

server.listen(3001, ()=>{
    console.log("server start")
})