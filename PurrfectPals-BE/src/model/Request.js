import mongoose from "../Database/database.js";
const requestSchema=new mongoose.Schema({
    image:{
        type: String,
    },
    duration:{
        type: Number,
    },
    description:{
        type: String,
    },
})

export const Request= mongoose.model("Request",requestSchema)