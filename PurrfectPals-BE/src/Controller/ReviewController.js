import { Review } from '../Model/Review.js';


export async function addReview(req,res){
    try{
        const pet_id = req.params.pet_id
        const user_id = req.params.user_id
        const{
            content,
        }=req.body;
        const review=new Review({
            content,
            pet_id,
            user_id
        })
        await review.save();
        console.log("added review", review)
        res.status(201).send(review);
    } catch(error){
        res.status(400).json({message:error.message});
    }
}