import { Post} from "../Model/Post.js";


export async function addPost(req,res){
    try{
        const{
            duration,
            description,
        }=req.body;
        const post=new Post({
            duration,
            description,
        })
        await post.save();
        res.status(201).send(post);
    } catch(error){
        res.status(400).json({message:error.message});
    }
}

