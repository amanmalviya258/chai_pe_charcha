
import mongoose from "mongoose";
import { DBname } from "../constants";

// * ----------------------------------------------------------------

//Method  iife
const connectDB = async () => {
  try {
   const ConnectionInstance =  await mongoose.connect(` ${process.env.MONDODB_URI}/${DBname}`);
    console.log(`Connected to ${DBname}`);
    console.log(ConnectionInstance)
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED", error);
    process.exit(1);
  }
};

    export default connectDB;

// *  ----------------------------------------------------------------

//Method Two normal function

// function connect() {
//   mongoose.connect(process.env.MONDODB_URI, {useNewUrlParser: true,  useUnifiedTopology: true,})
//     .then(console.log("connected"))
//     .catch((err) => {
//       console.log(err);
//     });
// }

// modules.export = connect
