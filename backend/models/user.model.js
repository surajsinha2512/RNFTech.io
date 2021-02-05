const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fName:{type: String,required:true},
    lName:{type: String,required:true},
    b:{type: String,required:true},
    mail: { type: String, required: true},
    psw: { type: String, required: true}
})

module.exports = User = mongoose.model('user', userSchema)