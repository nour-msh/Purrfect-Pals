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
            type: String,
        },
        pets:[{
            type: mongoose.Types.ObjectId,
            ref: 'Pet'
        }],
        posts:[{
            type: mongoose.Types.ObjectId,
            ref: 'Post'
        }]
    },
    {
        timestamps: true
    },

)

export const User = mongoose.model("User", userSchema)