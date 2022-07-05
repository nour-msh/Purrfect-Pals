import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then((result) => console.log("Connection Successful!"))
  .catch((err) => console.log(err));

  export default mongoose;