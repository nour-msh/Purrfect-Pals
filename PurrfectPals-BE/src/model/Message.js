import mongoose from "../Database/database.js";
const messageSchema= new mongoose.Schema({
    text:{
        type: String,
    },

})

export const Message=  mongoose.model("Message", messageSchema)