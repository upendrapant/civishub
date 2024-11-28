import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import hospitalReportModel from "./models/hospitalReportModel.js";
import patientDataModel from "./models/patientDataModel.js";
import DOBModel from "./models/DOBModel.js";
import CitizenshipModel from "./models/CitizenshipModel.js";
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

// patient table code
app.get("/add-patient", async (req, res) => {
    try {
        const response = await patientDataModel.create({
            patient_id: 1003,
            Patient_name: "Aarav Singh",
            patient_address: "Hetauda, Makwanpur",
            reports: [
                {
                    report_id: 5007,
                    Diagonosis: "Pneumonia",
                    Treatment: {
                        Medicines: ["Amoxicillin", "Paracetamol"],
                        Precautions: "Rest and drink plenty of fluids. Avoid cold weather."
                    },
                    hospital_name: "Nepal Cancer Hospital",
                    hospital_id: 101
                },
                {
                    report_id: 5008,
                    Diagonosis: "Lung Infection",
                    Treatment: {
                        Medicines: ["Ciprofloxacin", "Azithromycin"],
                        Precautions: "Avoid crowded places, wear a mask, and complete the prescribed antibiotics course."
                    },
                    hospital_name: "Annapurna Neuro Hospital",
                    hospital_id: 103
                },
                {
                    report_id: 5009,
                    Diagonosis: "Tuberculosis",
                    Treatment: {
                        Medicines: ["Isoniazid", "Rifampin"],
                        Precautions: "Complete the full course of medication. Avoid close contact with others."
                    },
                    hospital_name: "ENT Hospital Kathmandu",
                    hospital_id: 102
                }
            ]
        });
        res.json(response)

    } catch (err) {
        res.json({ message: err.message, sucess: false });
    }
});
// read patient data through patiend id
app.get("/patient/:patient_id", async (req, res) => {
    const { patient_id } = req.params;
    // console.log(patient_id)

    try {
        const response = await patientDataModel.find({ patient_id: patient_id });
        res.json(response)
    } catch (err) {
        // console.log(err)
        res.json({ message: err.message, sucess: false });
    }
});


// DOB table

// adding data -- i added data mannually
app.get("/DOB-add", async (req, res) => {
    try {
        const response = await DOBModel.create({
            DOB_id: 1001,
            DOB_name: "Rajesh Bhattarai",
            DOB_address: "Jorpati, Kathmandu",
            DOB_issuedDate: "1987-04-07",
            DOB_dateOfBirth: "1988-04-10"
        })
        res.json(response)
    } catch (err) {
        res.json({ message: err.message, sucess: false });
    }
});

// dob search through dob id
app.get("/DOB/:DOB_id", async (req, res) => {
    const { DOB_id } = req.params;
    // console.log(patient_id)

    try {
        const response = await DOBModel.find({ DOB_id: DOB_id });
        res.json(response)
    } catch (err) {
        // console.log(err)
        res.json({ message: err.message, sucess: false });
    }
});

// Citizenship table . i mannually updated it 
app.get("/citizenship-add", async (req, res) => {
    try {
        const response = await CitizenshipModel.create({
            citizen_id: 1003,   
            name: "Kishor Gurung",  
            address: "Chipledhunga, Pokhara",   
            issuedDate: "2024-11-29",   
            DOB: "1995-03-20"  
        });
        res.json(response);
    } catch (err) {
        res.json({ message: err.message, success: false });
    }
});


app.get("/citizenship/:citizen_id", async (req, res) => {
    const { citizen_id } = req.params;

    try {
        const response = await CitizenshipModel.find({ citizen_id: citizen_id });
        if (response.length === 0) {
            res.status(404).json({ message: "No citizenship record found", success: false });
        } else {
            res.json(response);
        }
    } catch (err) {
        res.json({ message: err.message, success: false });
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