import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import dotenv from "dotenv";

import Admin from "../models/Admin";

dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI!;

async function createAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);

    const existing = await Admin.findOne({
      email: "kuttistoryphotography@gmail.com",
    });

    if (existing) {
      console.log("✅ Admin already exists.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("Kuttistory@16", 12);

    await Admin.create({
      name: "Kutti Story",
      email: "kuttistoryphotography@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin created successfully.");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

createAdmin();