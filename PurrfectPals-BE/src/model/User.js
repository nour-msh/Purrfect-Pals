import mongoose from "../Database/database.js";
const userSchema = new mongoose.Schema(
{
        full_name:{
            type: String,
        },
        email:{
            type: String,
            required: true,
            unique: true,
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
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)