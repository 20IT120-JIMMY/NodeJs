import express, { request } from "express";
import mongoose from "mongoose";
import Student from "./model/studentmodel.js";

const app = express();

app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Jimmy0915:Jimmy$$0912@studentmangementsystem.ker0nuf.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB !!!🥳🥳🥳");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB !!!😢😢😢");
});

app.post("/addstudent", async (req, res) => {
  try {
    let data = new Student(req.body);
    await data.save();
    res.status(200).json({
      status: 200,
      message: "Student Added Successfully !!",
      data: data,
    });
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/deletestudent/:id", async (req, res) => {
  try {
    let data = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 200,
      message: "Student Delete Successfully !!",
      data: data,
    });
  } catch (error) {
    res.send(error.message);
  }
});

app.put("/editstudent/:id", async (req, res) => {
  try {
    let data = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      status: 200,
      message: "Student Edit Successfully !!",
      data: data,
    });
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/liststudent", async (req, res) => {
  try {
    let data = await Student.find();
    res.status(200).json({
      status: 200,
      message: "Student List Get Successfully !!",
      data: data,
    });
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3000, () => {
  connect();
  console.log("Listening on port 3000!!!🥳🥳🥳");
});
