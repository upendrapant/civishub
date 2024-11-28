import mongoose from "mongoose";
const PatientSchema = new mongoose.Schema({
    patient_id: { type: Number, unique: true }, 
    Patient_name: { type: String, required: true }, 
    patient_address: { type: String, unique: true, required: true }, 
    Diagonosis: { type: String, required: true }, 
    Treatment: { 
      Medicines: { type: [String], required: true }, 
      Precautions: { type: String, required: true } 
    },
    hospital_name: { type: String, required: true }, 
    hospital_id: { type: Number, required: true }
},{timestamps:true});

const patientDataModel=mongoose.model("patient",PatientSchema);
export default patientDataModel;