import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../lib/mongoose";
import InfoSchema from "../models/info";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "GET") {
    const profiles = await InfoSchema.find();

    if (profiles) {
      res.status(200).json(profiles);
    } else {
      res.status(404).json({ msg: "No Profiles Found" });
    }
  } else {
    res.status(405).end();
  }
}
