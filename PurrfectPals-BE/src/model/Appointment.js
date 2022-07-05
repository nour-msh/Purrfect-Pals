import mongoose from "../Database/database.js";
const appointmentSchema= new mongoose.Schema({
    date:{
        type:String
    },
    time:{
        type:String,
    },
}) 

export const Appointment= mongoose.model("Appointment", appointmentSchema)