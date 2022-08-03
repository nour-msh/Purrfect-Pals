import { Appointment } from '../Model/Appointment.js';

export async function addAppointment(req,res){
    try{
        const{
            date,
            time,
        }=req.body;
        const appointment= new Appointment({
            date,
            [time],
        })
        await appointment.save();
        res.status(201).send(appointment);
    } catch (error){
        res.status(400).json({message:error.message});
    }
}