import mongoose from "../Database/database.js";
const petCategorySchema=new mongoose.Schema({ 
    pet_type:{
        type: String,
    },
    pets:[{
        type: mongoose.Types.ObjectId,
        ref: 'Pet'
    }]
})

export const Post= mongoose.model("PetCategory",petCategorySchema)
