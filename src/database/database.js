import mongoose from "mongoose";

const connectURL ="mongodb+srv://ajaisajin:alexa321@cluster.djh4i.mongodb.net/sample"

const connectDB = () => {
  try {
    mongoose.connect(connectURL);
    const database = mongoose.connection;

    // on connection
    database.on("error", (error) => {
      throw error;
    });
    // once connected
    database.once("connected", () => {
      console.log("Database Connected");
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
