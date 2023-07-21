const mongoose = require('mongoose')
const validator = require('validator')


var userSchema = new mongoose.Schema({
    name:{type:'string',required:true},
    mobileNumber:{type:'Number',require:true},
    company:{type:'string',require:true},
    email:{
        type:'string',
        required:true,
        lowercase:true,
        validate:(value)=>{
                return validator.isEmail(value)
        }
    },
    password:{type:'string',required:true},
    role:{type:'string',default:'Employee'},
    createdAt:{type:Date,default:Date.now()}
})

let usersModel = mongoose.model('users',userSchema);

module.exports={mongoose,usersModel}