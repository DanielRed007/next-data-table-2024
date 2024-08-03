import mongoose from "mongoose";
import InfoSchema from "../../models/info";
import connectToDatabase from "@/app/lib/mongoose";

async function createInfoDocument() {
  await connectToDatabase();

  const infoData = {
    fields: {
      "regular-col-1": { type: "string", value: "Regular Text Column" },
      "regular-col-2": { type: "string", value: "Regular Text Column" },
      "active-col-1": { type: "string", value: "Active Column" },
    },
  };

  const infoDocument = new InfoSchema(infoData);
  await infoDocument.save();
  console.log("Document saved:", infoDocument);
}

createInfoDocument().catch(console.error);
