const express = require("express")
const { createUser, loginUser } = require("../controllers/user")

const router = express.Router()

router
.post("/signup", createUser)
.post("/login", loginUser)

exports.router = router