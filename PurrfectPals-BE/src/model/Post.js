import mongoose from "../Database/database.js";
const postSchema=new mongoose.Schema({
    // pet_name:{
    //     type: String,
    // },
    duration:{
        type: String,
    },
    description:{
        type: String,
    },
    pet_id: {
        type: String,
    },
    pet_owner_id:{
        type: String,
    },
})

export const Post= mongoose.model("Post",postSchema)