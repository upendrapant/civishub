import mongoose from "mongoose";

const CitizenshipSchema = new mongoose.Schema({
    citizen_id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    issuedDate: {
        type: String,
        required: true,
        match: /^\d{4}-\d{2}-\d{2}$/
    },
    DOB: {
        type: String,
        required: true,
        match: /^\d{4}-\d{2}-\d{2}$/
    }
}, { timestamps: true });

const CitizenshipModel = mongoose.model("Citizenship", CitizenshipSchema);

export default CitizenshipModel;
