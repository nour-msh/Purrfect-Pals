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

export async function getAllReviewsByPetId(req,res){
    try{
        const results = await Review.find({pet_id: req.params.pet_id})
        res.status(200).json(results)
    } catch (error) {
        console.log(`getReviews error: ${error}`)
        res.status(500).json({
            message: error.message
        })
    }
}