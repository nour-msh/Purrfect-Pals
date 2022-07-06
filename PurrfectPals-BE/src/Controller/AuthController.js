import {User} from "../model/User.js";
// import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";

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

async function getByEmail(email) {
  return await User.findOne({
    email
  });
}

export async function login(req,res){
  try {
    const user = await getByEmail(req.body.email);
    if (!user) return res.status(400).send('invalid credentials');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('invalid credentials');

    const token = jwt.sign(
      {_id: user._id, email: user.email},
      TOKEN_KEY
    );

    return res.header('auth-token', token).send(token);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }}