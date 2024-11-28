import mongoose from "mongoose";
const DOBSchema = new mongoose.Schema({
    DOB_id: { type: Number, unique: true, },
    DOB_name: { type: String, required: true },
    DOB_address: { type: String, required: true },
    DOB_issuedDate: { 
        type: String, 
        required: true, 
        match: /^\d{4}-\d{2}-\d{2}$/  
      },  
      DOB_dateOfBirth: { 
        type: String, 
        required: true, 
        match: /^\d{4}-\d{2}-\d{2}$/ 
      }
}, { timestamps: true });
const DOBModel = mongoose.model("DOB", DOBSchema);
export default DOBModel;