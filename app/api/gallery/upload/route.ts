import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";


export async function POST(request: Request) {
  try {
    console.log("========== GALLERY UPLOAD START ==========");

    // Connect MongoDB
    await connectDB();
    console.log("✅ MongoDB Connected");

    // Check Cloudinary environment variables
    console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
    console.log(
      "API Key Exists:",
      !!process.env.CLOUDINARY_API_KEY
    );
    console.log(
      "API Secret Exists:",
      !!process.env.CLOUDINARY_API_SECRET
    );

    // Read form data
    const formData = await request.formData();

    const file = formData.get("file") as File | null;
    const category = (formData.get("category") as string) || "Wedding";
    const featured = formData.get("featured") === "true";
    const title = (formData.get("title") as string) || "Untitled";

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "No file selected.",
        },
        {
          status: 400,
        }
      );
    }

    console.log("Uploading:", file.name);

    // Convert File -> Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResult = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "kutti-story/gallery",
            resource_type: "image",
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary Error:", error);
              reject(error);
            } else {
              resolve(result);
            }
          }
        )
        .end(buffer);
    });

    console.log("✅ Uploaded to Cloudinary");

    // Save to MongoDB
    const photo = await Gallery.create({
    title,
    image: uploadResult.secure_url,
    public_id: uploadResult.public_id,
    category,
    featured,
    });

    console.log("✅ Saved to MongoDB");

    return NextResponse.json({
      success: true,
      message: "Photo uploaded successfully.",
      photo,
    });
  } catch (error: any) {
    console.error("========== GALLERY UPLOAD ERROR ==========");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Unknown error",
        error:
          process.env.NODE_ENV === "development"
            ? String(error)
            : undefined,
      },
      {
        status: 500,
      }
    );
  }
}