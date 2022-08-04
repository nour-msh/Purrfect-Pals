import mongoose from "../Database/database.js";
const taskSchema=new mongoose.Schema({ 
    todo:{
        type: String
    }

})

export const Task= mongoose.model("Task",taskSchema)