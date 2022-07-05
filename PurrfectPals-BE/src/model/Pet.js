import mongoose from "../Database/database.js";
const petSchema= new mongoose.Schema({
    pet_name:  {
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
})

export const Pet= mongoose.model("Pet", petSchema)