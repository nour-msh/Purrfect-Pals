import mongoose from "../Database/database.js";
const userSchema = new mongoose.Schema({
    full_name:{
        type: String,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },

    phone_number:{
        type: Number,
    },

    user_type:{
        type: Number,
    },
})

export const User = mongoose.model("User", userSchema)