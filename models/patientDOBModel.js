import mongoose from "mongoose";
const DOB = new mongoose.Schema({
    DOB_id: { type: Number, unique: true },
    DOB_name: { type: String },
    DOB_address: { type: String, unique: true },
    DOB_issuedDate: { type: Date },
    DOB: { type: Date }
});