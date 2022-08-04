import mongoose from "../Database/database.js";
const locationSchema=new mongoose.Schema({ 
    longitude:{
        type:String
    },
    latitude:{
        type:String
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },

})

export const MarkedLocation= mongoose.model("MarkedLocation",locationSchema)