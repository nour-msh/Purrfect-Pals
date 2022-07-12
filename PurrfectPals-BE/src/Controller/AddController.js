import {Pet} from '../Model/Pet.js';
import { Review } from '../Model/Review.js';
import { Appointment } from '../Model/Appointment.js';


export async function addPet(req, res){
    try{
        const {
            pet_name,
            image,
            breed,
            age,
            pet_type,
            pet_owner_id,
        } = req.body;
    
        const pet= new Pet({
            pet_name,
            image,
            breed,
            age,
            pet_type,
            pet_owner_id,
        })
        await pet.save();
        res.status(201).send(pet);
    } catch(error){
        res.status(400).json({message:error.message});
    }
};

export async function addReview(req,res){
    try{
        const{
            text,
            rating
        }=req.body;
        const review=new Review({
            text,
            rating
        })
        await review.save();
        res.status(201).send(review);
    } catch(error){
        res.status(400).json({message:error.message});
    }
}

export async function addAppointment(req,res){
    try{
        const{
            date,
            time,
        }=req.body;
        const appointment= new Appointment({
            date,
            time,
        })
        await appointment.save();
        res.status(201).send(appointment);
    } catch (error){
        res.status(400).json({message:error.message});
    }
}
