import mongoose from "../Database/database.js";
const petCategorySchema=new mongoose.Schema({ 
    pet_type:{
        type: String,
    }
})

export const Post= mongoose.model("PetCategory",petCategorySchema)
