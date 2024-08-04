import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import User, { IUser } from "../models/user";

const MONGODB_URI: string = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const generateFakeUsers = (numUsers: number): Partial<IUser>[] => {
  const users: Partial<IUser>[] = [];
  for (let i = 0; i < numUsers; i++) {
    users.push({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 65 }),
    });
  }
  return users;
};

export const seedDatabase = async () => {
  const fakeUsers = generateFakeUsers(50);
  await User.insertMany(fakeUsers);
  console.log("Inserted fake users into the database");
};

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose.connection;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
