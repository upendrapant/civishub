import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import hospitalReportModel from "./models/hospitalReportModel.js";

const app = express();

app.get("/add-hospital", async (req, res) => {
    try {
        const response = await hospitalReportModel.create({
            hospital_id: 6482,
            hospital_name: "Tilganga Institute Of Opthalmology",
            hospital_address: "kathmandu",
            hospital_speciality: "Skin care"
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


app.listen(8000, async () => {
    console.log("server has been started");
    try {

        await mongoose.connect(process.env.MONGODB_CONNECTION_URL)
        console.log("connected to database")
    } catch (err) {
        console.log(err)
    }

})