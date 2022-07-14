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
        type: mongoose.Types.ObjectId,
    },
    user_id:{
        type: mongoose.Types.ObjectId,
    },

})

export const Post= mongoose.model("Post",postSchema)