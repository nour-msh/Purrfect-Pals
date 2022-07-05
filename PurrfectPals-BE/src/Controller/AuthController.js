import { User } from "../model/User";
import { Jwt } from "jsonwebtoken";
import {bcrypt} from "bcrypt";


async function addUser(body, hashPassword) {
    const {
      full_name,
      email,
      password,
      phone_number,
      user_type,

    } = body;
  
    const user = new User({
      full_name,
      email,
      password,
      phone_number,
      user_type,
    });
  
    return await user.save();
  }

export async function register(req,res){

    try {
      console.log(req.body);
  
      const salt = await bcrypt.genSalt(12);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
  
      const addUserResult = await addUser(req.body, hashPassword);
      console.log('addUserResult =>', addUserResult);
      
      return res.send({ user: addUserResult._id });
    } catch (error) {
      console.log(error);
    }
}