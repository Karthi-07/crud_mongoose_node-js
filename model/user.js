
const {mongoose} = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('User',schema);