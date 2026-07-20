import { connectDB } from "@/lib/mongodb";
import Homepage from "@/models/Homepage";

export async function getHomepage() {
  await connectDB();

  const homepage = await Homepage.findOne().lean();

  return homepage
    ? JSON.parse(JSON.stringify(homepage))
    : null;
}