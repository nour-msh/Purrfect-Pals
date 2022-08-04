import { MarkedLocation } from "../Model/MarkedLocation.js";

export async function addMark(req, res){
    try{
        // const user_id = req.params.user_id
        const {
            longitude,
            latitude,
        } = req.body;
        
        const location= new MarkedLocation({
            longitude,
            latitude,
        })
        await location.save();
        res.status(201).send(location);
    }catch (error) {
            res.status(400).json({ message: error.message });
          }
        }