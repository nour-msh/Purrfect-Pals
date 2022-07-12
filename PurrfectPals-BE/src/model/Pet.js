import mongoose from "../Database/database.js";
const petSchema= new mongoose.Schema({
    pet_name:  {
        type: String,
    },
    image: {
        type: String,
    },
    breed: {
        type: String,
    },
    age: {
        type: Number,
    },
    pet_type: {
        type: String,
    },
    pet_owner_id:{
        type:String,
    },
})

export const Pet= mongoose.model("Pet", petSchema)