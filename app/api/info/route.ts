import { ObjectId } from "mongodb";
import connectToDatabase from "@/app/lib/mongoose";
import { NextResponse } from "next/server";

import UserSchema from "../../models/user";

export async function GET() {
  try {
    await connectToDatabase();

    const dataTable = await UserSchema.find().sort({ createdAt: -1 }).limit(20);

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

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json(); // Parse the incoming request body
    const newUser = new UserSchema(body); // Create a new instance of the UserSchema with the parsed data

    const savedUser = await newUser.save(); // Save the new user to the database

    return NextResponse.json(savedUser, { status: 201 }); // Return the saved user data with a 201 Created status
  } catch (error: any) {
    console.error("Error saving user to the database:", error);
    return NextResponse.json(
      { msg: "Error saving user to the database:", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectToDatabase();

    const body = await req.json();
    const { _id, ...updateData } = body;

    if (!_id || !ObjectId.isValid(_id)) {
      return NextResponse.json({ msg: "Invalid ID" }, { status: 400 });
    }

    const updatedUser = await UserSchema.findOneAndUpdate(
      { _id: new ObjectId(_id) },
      { $set: updateData },
      { new: true }
    );

    if (updatedUser) {
      return NextResponse.json(updatedUser, { status: 200 });
    } else {
      return NextResponse.json({ msg: "User not found" }, { status: 404 });
    }
  } catch (error: any) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { msg: "Error updating user", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectToDatabase();

    const body = await req.json();
    const { _id } = body;
    console.log(_id, body);

    if (!_id || !ObjectId.isValid(_id)) {
      return NextResponse.json({ msg: "Invalid ID" }, { status: 400 });
    }

    const deletedUser = await UserSchema.deleteOne({ _id: new ObjectId(_id) });

    if (deletedUser) {
      return NextResponse.json(deletedUser, { status: 200 });
    } else {
      return NextResponse.json({ msg: "User not found" }, { status: 404 });
    }
  } catch (error: any) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { msg: "Error updating user", error: error.message },
      { status: 500 }
    );
  }
}
