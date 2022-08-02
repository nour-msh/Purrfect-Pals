import mongoose from "../Database/database.js";
const portfolioSchema= new mongoose.Schema({
    email:{
        type:String
    },
    number:{
        type:Number,
    },
    specialty:{
        type:Number,
    },
    story:{
        type:Number,
    },
    vet_id:{
        type: mongoose.Types.ObjectId,
    },
}) 

export const Portfolio= mongoose.model("Portfolio", portfolioSchema)