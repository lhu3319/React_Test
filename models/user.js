const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type : String,
        maxlength: 50
    },
    email:{
        type:String,
        trim:true,
        unique: true
    },
    password:{
        type: String,
        maxlength:50
    },
    role:{
        type:Number,
        default: 0
    },
    Image:String,
    token:{
        types:String
    },
    tokenExp:{ //토큰 유효기간
        type:Number
    }

})

const User = mongoose.model('User',userSchema);

module.exports = {User};