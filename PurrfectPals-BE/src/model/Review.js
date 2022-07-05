import mongoose from "../Database/database.js"
const reviewSchema= new mongoose.Schema({
    text:{
        type: String,
    },
    rating:{
        type: Number,
    },

})

export const Review= mongoose.model("Review", reviewSchema)