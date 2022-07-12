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
    pet_id: {
        type: String,
    },
    pet_owner_id:{
        type: String,
    },
})

export const Request= mongoose.model("Request",requestSchema)