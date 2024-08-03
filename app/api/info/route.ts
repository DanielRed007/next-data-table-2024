import connectToDatabase from "@/app/lib/mongoose";
import { NextResponse } from "next/server";

import InfoSchema from "../../models/info";

export async function GET() {
  try {
    await connectToDatabase();

    const dataTable = await InfoSchema.find();

    if (dataTable) {
      return NextResponse.json(dataTable, { status: 200 });
    } else {
      return NextResponse.json({ msg: "No Profiles Found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Database connection or query error:", error);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
}
