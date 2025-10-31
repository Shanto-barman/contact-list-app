import express from "express";
import Contact from "./user.model.js";

const router = express.Router();


 export const createUser = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getUsers= async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};


export const updateUser = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteUser = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Contact deleted" });
};

export default router;
