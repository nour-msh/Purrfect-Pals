import {User} from "../Model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const JWT_SECRET='PurrfectPals'

async function addUser(body,password) {
    const {
      full_name,
      image,
      email,
      phone_number,
      user_type,
    } = body;
  
    const user = new User({
      full_name,
      image,
      email,
      password,
      phone_number,
      user_type,
    });
  
    return await user.save();
  }

export async function register(req,res){
  console.log(1)
    try {
      console.log(req.body);
  
      const salt = await bcrypt.genSalt(12);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      console.log(hashPassword)
  
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
    console.log("saved password: ", user.password)

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    console.log(validPassword)
    if (!validPassword) return res.status(400).send('invalid credentials p');

    const token = jwt.sign(
      {_id: user._id, name: user.name, email: user.email},
      JWT_SECRET
    );

    //return res.header('auth-token', token).send(token);
    
    return res.status(200).send({
      message: "login successful",
      user_id: user._id,
      user_name: user.full_name,
      user_phone: user.phone_number,
      user_type: user.user_type,
      image:user.image,
      token: token
    })
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }}