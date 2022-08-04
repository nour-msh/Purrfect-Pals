import mongoose from "../Database/database.js";
const locationSchema=new mongoose.Schema({ 
    longitude:{
        type:String
    },
    latitude:{
        type:String
    },

})

export const MarkedLocation= mongoose.model("MarkedLocation",locationSchema)