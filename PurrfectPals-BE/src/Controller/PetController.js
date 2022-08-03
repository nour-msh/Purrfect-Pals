import {Pet} from '../Model/Pet.js';
import {User} from '../Model/User.js';


export async function addPet(req, res){
    try{
        const user_id = req.params.user_id
        const {
            pet_name,
            image,
            breed,
            age,
            pet_type,
        } = req.body;
        
        const pet= new Pet({
            pet_name,
            image,
            breed,
            age,
            pet_type,
            user_id,
        })
        await pet.save();

       
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

export async function getPets(req,res){
    try{
        const results = await Pet.find({user_id: req.params.user_id})
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}