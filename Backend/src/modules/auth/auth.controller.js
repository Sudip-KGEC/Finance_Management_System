import { registerUser , loginUser } from "./auth.service.js";


export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);

  res.cookie("token", user.token, {
  httpOnly: true,
  secure: true, 
  sameSite: "none",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body);
   

    res.cookie("token", user.token, {
  httpOnly: true,
  secure: true, 
  sameSite: "none",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});
     
    return res.status(200).json({
      success: true,
      data: user
    });

  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.message
    });
  }
};


export const getMe = async (req, res) => {
  try {
    res.json({
      user: req.user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const logout = (req, res) => {
 res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date(0),
  });

  res.json({ message: "Logged out successfully" });
};