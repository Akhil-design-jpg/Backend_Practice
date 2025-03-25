import mongoose from "mongoose"

const addressSchema = new mongoose.Schema({
    Permanent:{
        type: String,
        required: true
        
    },

    Correspondance:{
        type: String,
        required: false ,
        default: "Same as Permanent address"
    }
},{timestamps: true})


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },

    password:{
        type: String,
        required: true
    },

    address:{
      type: [addressSchema]
    }
},{timestamps: true})


const User = mongoose.model("User",userSchema)
export default User