import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    
    const {_id , role} = user;

    const token = jwt.sign({_id , role }, process.env.JWT_SECRET , {expiresIn: "3d"})
       
    return token;
}

export default generateToken;
