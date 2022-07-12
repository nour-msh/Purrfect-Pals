import mongoose from "../Database/database.js";
const appointmentSchema= new mongoose.Schema({
    date:{
        type:String
    },
    time:{
        type:String,
    },
    pet_id:{
        type: String,
    },
    vet_id:{
        type: String,
    },
}) 

export const Appointment= mongoose.model("Appointment", appointmentSchema)