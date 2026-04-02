import User from "../../models/user.model.js";
import bcrypt from 'bcryptjs';
import generateToken from "../../utils/generateToken.js";



export const registerUser = async (data) => {
 const {name , email , password , role} = data;
 
 if(!name || !email || !password) throw new Error("Required name or email or password!");

 const existingUser = await User.findOne({email});

 if(existingUser) {
    throw new Error("User already exists")
 };

 const hashPassword = await bcrypt.hash(password , 10);

 const user = await User.create({
   name,
   email,
   password: hashPassword,
   role: role
 });

 const token = generateToken(user);

 return {
    name: user.name,
    email: user.email,
    role: user.role,
    token : token
 }

}


export const loginUser = async (data) => {
  const {email , password } = data;

  const user = await User.findOne({email});
  if(!user) throw new Error("User not found!");


  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Invalid credentials");

   const token = generateToken(user);

   return {
    name : user.name,
    email: user.email,
    token: token
   }
}

