import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { tmpdir } from "os";
import { join } from "path";
import { writeFile, remove } from "fs-extra";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "No file uploaded.",
        },
        { status: 400 }
      );
    }

    const bytes = Buffer.from(await file.arrayBuffer());

    const tempFile = join(
      tmpdir(),
      `${Date.now()}-${file.name}`
    );

    await writeFile(tempFile, bytes);

    const result = await cloudinary.uploader.upload(tempFile, {
      folder: "kutti-story",
    });

    await remove(tempFile);

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error: any) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}