import {User} from "../Model/User.js";


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