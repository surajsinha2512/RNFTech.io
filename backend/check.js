const express = require('express')
const router = require('express').Router()
//const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
//const jwt = require('jsonwebtoken')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 9999

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(9999);
app.post('/login',(req,res)=>{
    const { email, password } = req.body;
    console.log(email,password);
    res.sendStatus(200);
})



app.post('/signup',(req,res)=>{
    const { firstName,lastName,bio,email, password ,} = req.body;
    console.log(email,password);
    res.sendStatus(200);
})