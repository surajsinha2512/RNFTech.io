const express = require('express')
const router = require('express').Router()
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 9999

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Schema

const User = new mongoose.Schema({
  fName:{type: String,required:true},
  lName:{type: String,required:true},
  b:{type: String,required:true},
  mail: { type: String, required: true},
  psw: { type: String, required: true}
})



/// middleWare

const auth = (req, res, next) => {
  try {
    const token = req.header('x-auth-token')
    if (!token) {
      return res.status(401).json({ msg: 'No authentication token, access denied' })
    }
    // decrypting the token
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified) {
      return res.status(401).json({ msg: 'token verification is failed' })
    }
    req.user = verified.id
    console.log(verified.id)
    next()
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}




app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`))

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  (err) => {
    if (err) throw err
    console.log('Mongo db connection is established')
  })

//app.use('/users', require('./routes/user'))










router.post('/signup', async (req, res) => {
  try {
    // reading the data from user
    const { firstName,lastName,bio,email, password } = req.body
    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: 'User account already exists' })
    }
    // encryption for our password
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    console.log('passwordHash')
    console.log(passwordHash)
    const newUser = new User({
      fName:firstName,
      lName:lastName,
      b:bio,
      mail: email,
      psw: passwordHash
    })
    console.log('newUser')
    console.log(newUser)
    const savedUser = await newUser.save()
    res.json(savedUser)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})



router.post('/login', async (req, res) => {
  try {
    // reading the data from the user
    const { email, password } = req.body
    // whether the user is already
    const user = await User.findOne({ email: email })
    if (!user) {
      return res
        .status(400)
        .json({ msg: 'User account does not exists' })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })
    // encryption is happening to the token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.json({
      token,
      user: {
        id: user._id
      }
    })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
})

//

router.get('/', auth, async (req, res) => {
  try {
    // reading the data from user
    // const id = req.query.id
    // console.log(id)
    const user = await User.findById(req.user)
    res.json({
      id: user._id,
      email: user.email,
      password: user.password
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

