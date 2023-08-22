const bcrypt = require("bcrypt")
const { User } = require("../models/user")
const jwt = require("jsonwebtoken")
exports.createUser = async (req,res)=>{
    const {name,email,password,cpassword} = req.body
    const user = await User.findOne({email})
    console.log("control", user)
    try{
        if(user){
            return res.status(401).json({msg:"user already exist"})
        }
        if(cpassword===password){
            const hashedPassword = await bcrypt.hash(password,10)
          
            const newUser = new User({name,email,password:hashedPassword})
            await newUser.save()
            res.status(200).json({message:"!user created"})
           
        }else{
            res.status(400).json({msg:"pasword not matching"})
        }
       
    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.loginUser= async(req,res)=>{
    console.log("control", req.body)
    try{
        const {email,password} =req.body
        const user = await User.findOne({email}).exec()
        if(!user){
            return await res.status(401).json({message:"email is not valid"})
        }
        const validUser = await bcrypt.compare(password,user.password)
        if(!validUser){
           return await res.status(401).json("Wrong password")
        }

        const token  = jwt.sign({userId:user._id},"secretKey", { expiresIn: '1h' })
         await res.status(200).json({user:user._id,token})
        
  
    }catch(err){
        res.status(500).send(err.message)
    }
}

