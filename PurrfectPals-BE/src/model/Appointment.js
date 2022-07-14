import mongoose from "../Database/database.js";
const appointmentSchema= new mongoose.Schema({
    date:{
        type:String
    },
    time:{
        type:String,
    },
    pet_id:{
        type: mongoose.Types.ObjectId,
        
    },
    vet_id:{
        type: mongoose.Types.ObjectId,
    },
}) 

export const Appointment= mongoose.model("Appointment", appointmentSchema)