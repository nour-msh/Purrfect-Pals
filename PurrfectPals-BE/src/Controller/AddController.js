import {Pet} from '../Model/Pet.js';
import { Review } from '../Model/Review.js';
import { Appointment } from '../Model/Appointment.js';
// import { User } from '../Model/User.js';
import dotenv from "dotenv";
dotenv.config();


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

        const {user_id} = req.body
        await User.findByIdAndUpdate(
            user_id,
            { $push: { pets: pet._id } },
            { new: true, useFindAndModify: false }
          );
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
