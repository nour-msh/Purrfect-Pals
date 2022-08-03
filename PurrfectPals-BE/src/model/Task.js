import mongoose from "../Database/database.js";
const taskSchema=new mongoose.Schema({ 
    task:{
        type: String
    }

})

export const Task= mongoose.model("Task",taskSchema)