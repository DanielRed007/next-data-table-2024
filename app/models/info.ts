import mongoose from "mongoose";

const FieldSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const InfoSchema = new mongoose.Schema({
  fields: {
    type: Map,
    of: FieldSchema,
    default: {},
  },
});

export default mongoose.models.Info || mongoose.model("Info", InfoSchema);
