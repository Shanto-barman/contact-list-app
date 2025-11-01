import express from "express";
import User from "./user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {JWT_SECRET, ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN } from "../../config/envConfig.js";

const router = express.Router();


 export const createUser = async (req, res) => {
   const {name,email,password,phone} = req.body;

  try {

     const hasPassword = await bcrypt.hash(password,10);

    const user = new User({
          name,
          email,
          password:hasPassword,
          phone
    });

    const saveUser = await user.save();
    res.status(201).json(saveUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

 export const loginUser = async (req, res) => {
  const { email, password } = req.body;

        try {
          const user = await User.findOne({ email });
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }

        
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(400).json({ message: ' Invalid credentials' });
          }

          const accessToken = jwt.sign(
            { userId: user._id, email: user.email },
            JWT_SECRET, 
            { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
          );

          const refreshToken = jwt.sign(
            { userId: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: REFRESH_TOKEN_EXPIRES_IN }
          );

          res.status(200).json({
            message: 'Login successful',
            accessToken,
            refreshToken,
            user:{
              id:user._id,
              email:user.email,
            }
          });
        } catch (err) {
          res.status(500).json({ message: `Server Error: ${err.message}` });
        }
};




export const getUsers= async (req, res) => {
  const contacts = await User.find();
  res.json(contacts);
};


export const updateUser = async (req, res) => {
  try {
    const contact = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Contact deleted" });
};

export default router;
