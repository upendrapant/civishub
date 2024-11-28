import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import hospitalReportModel from "./models/hospitalReportModel.js";
import patientDataModel from "./models/patientDataModel.js";
const app = express();




// hospital
app.get("/add-hospital", async (req, res) => {
    try {
        const response = await hospitalReportModel.create({
            hospital_id: 7854,
            hospital_name: "Chitwan Medical College",
            hospital_address: "Bharatpur",
            hospital_speciality: "Surgery and Diagonosis"
        });
        res.json(response);
    } catch (err) {
        res.json({ message: err.message, sucess: false });
    }
});

app.get("/hospital/:hospital_id", async (req, res) => {
    const { hospital_id } = req.params;
    console.log(hospital_id)
    try {
        const response = await hospitalReportModel.find({ hospital_id: hospital_id });
        res.json(response);
    } catch (err) {
        // console.log(err)
        res.json(err);
    }
});


app.get("/add-patient", async (req, res) => {
    try {
        const response = await patientDataModel.create({
    patient_id: 1003,
    Patient_name: "Kishor Gurung",
    patient_address: "Chipledhunga, Pokhara",
    Diagonosis: "Epilepsy",
    Treatment: {
    Medicines: ["Levetiracetam", "Valproic Acid"],
    Precautions: "Take medicine on time, avoid sleep deprivation."
    },
    hospital_name: "Annapurna Neuro Hospital",
    hospital_id: 3123
        })
        res.json(response)

    } catch (err) {
        res.json({ message: err.message, sucess: false });
    }
})


































app.listen(8000, async () => {
    console.log("server has been started");
    try {

        await mongoose.connect(process.env.MONGODB_CONNECTION_URL)
        console.log("connected to database")
    } catch (err) {
        console.log(err)
    }

})