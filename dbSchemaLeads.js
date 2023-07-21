const mongoose = require('mongoose')
const validator = require('validator')


var userSchema = new mongoose.Schema({
    leadName:{type:'string',required:true},
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
    role:{type:'string',default:'Employee'},
    createdAt:{type:Date,default:Date.now()},
    status:{type:'string',require:true}
})

let usersModel = mongoose.model('leads',userSchema);

module.exports={mongoose,usersModel}