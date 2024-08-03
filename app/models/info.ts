import mongoose from "mongoose";

const InfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide an name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: false,
  },
  message: {
    type: String,
    required: [true, "Please provide an message"],
    unique: false,
  },
});

export default mongoose.models.Info || mongoose.model("Info", InfoSchema);
