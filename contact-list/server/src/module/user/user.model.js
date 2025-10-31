import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, require:true },
  phone: { type: String, required: true },
});


export default mongoose.model("Contact", contactSchema); 