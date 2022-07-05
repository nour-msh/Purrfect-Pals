import mongoose from "../Database/database.js";
const requestSchema=new mongoose.Schema({
    image:{
        type: String,
    },
    text:{
        type: String,
    },
})

export const Request= mongoose.model("Request",requestSchema)