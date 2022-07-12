import {Pet} from '../Model/Pet.js';


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

