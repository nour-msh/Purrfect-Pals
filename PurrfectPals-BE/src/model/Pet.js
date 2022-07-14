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
    reviews: [{
        text:{
            type: String,
        },
        rating:{
            type: Number,
        },
    }],
    users:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    petCategory:{
        type: mongoose.Types.ObjectId,
        ref: 'PetCategory'
    }
})

export const Pet= mongoose.model("Pet", petSchema)