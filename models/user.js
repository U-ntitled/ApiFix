const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fname: {
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },


},
   {
     timeistamp:true
   }
)
module.exports = mongoose.model('User',userSchema) 
