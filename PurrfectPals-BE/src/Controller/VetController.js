import { Appointment } from '../Model/Appointment.js';
import {User} from '../Model/User.js';

export async function getVets(req,res){
  try{
    const results = await User.find({user_type:'1'})
    res.status(200).json(results)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

export async function addAppointment(req,res){
  try{
      const{
          date,
          time,
      }=req.body;
      const appointment=new Appointment({
          date,
          time,
      })
      await appointment.save();
      res.status(201).send(appointment);
  } catch(error){
      res.status(400).json({message:error.message});
  }
}