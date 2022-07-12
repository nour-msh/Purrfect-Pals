import mongoose from "../Database/database.js"
const reviewSchema= new mongoose.Schema({
    text:{
        type: String,
    },
    rating:{
        type: Number,
    },
    entity_id:{
        type: String,
    },
    entity_type:{
        type: String,
    },

})

export const Review= mongoose.model("Review", reviewSchema)