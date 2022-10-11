import mongoose from "mongoose";

const { Schema } = mongoose;

const StudentSchema = new mongoose.Schema(
  {
    studentID: {
      type: String,
      required: true,
    },
    StudentName: {
      type: String,
      required: true,
    },
    StudentmobileNo: {
      type: Number,
      required: false,
      unique: true, // define a unique value
      trim: true,
    },
    StudentEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true } // show created and updated time in database
);

export default mongoose.model("Student", StudentSchema);
