import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password : {
    required: true,
    type: String
  }
});

const User = mongoose.model("User", schema);
export default User;
