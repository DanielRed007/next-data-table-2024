import connectToDatabase from "@/app/lib/mongoose";
import { NextResponse } from "next/server";

import UserSchema from "../../models/user";

export async function GET() {
  try {
    await connectToDatabase();

    const dataTable = await UserSchema.find().limit(20);

    if (dataTable.length > 0) {
      return NextResponse.json(dataTable, { status: 200 });
    } else {
      return NextResponse.json({ msg: "No Profiles Found" }, { status: 404 });
    }
  } catch (error: any) {
    // Implement logger library for error server events
    console.error("Database connection or query error:", error);
    return NextResponse.json(
      { msg: "Database connection or query error:", error: error },
      { status: 500 }
    );
  }
}
