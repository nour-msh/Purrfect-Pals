import { Review } from '../Model/Review.js';


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