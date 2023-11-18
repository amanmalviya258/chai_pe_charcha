import mongoose from "mongoose";
import 
(async () => {
  try {
    mongoose.connect(process.env.MONDODB_URI);
  } catch (error) {
    console.log("ERROR" , error)
    throw err 
  }
})();
