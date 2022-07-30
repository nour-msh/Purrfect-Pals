import {Post} from "../Model/Post.js"

export async function search(req,res){
    try{
        const results = await Post.find({"or":[
            {pet_name:{$regex:req.params.key }},
            {duration:{$regex:req.params.key }}
        ]})
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}