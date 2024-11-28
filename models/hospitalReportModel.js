import mongoose from "mongoose";
const hospitalReportSchema = new mongoose.Schema({
    hospital_id: { type: Number, unique: true },
    hospital_name: { type: String, unique: true },
    hospital_address: { type: String },
    hospital_speciality: { type: String },
},{timestamps:true});

const hospitalReportModel = mongoose.model("hospital", hospitalReportSchema);
export default hospitalReportModel;