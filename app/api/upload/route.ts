import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { tmpdir } from "os";
import { join } from "path";
import { writeFile, remove } from "fs-extra";

export async function POST(request: Request) {
  try {
    console.time("Total Upload");

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

    console.time("Write Temp File");

    const bytes = Buffer.from(await file.arrayBuffer());

    const tempFile = join(tmpdir(), `${Date.now()}-${file.name}`);

    await writeFile(tempFile, bytes);

    console.timeEnd("Write Temp File");

    console.time("Cloudinary Upload");

    const isAudio = file.type.startsWith("audio/");

    const result = await cloudinary.uploader.upload(tempFile, {
      folder: "kutti-story",
      resource_type: isAudio ? "video" : "image",
      timeout: 600000,
    });

    console.log(result);

    console.timeEnd("Cloudinary Upload");

    await remove(tempFile);

    console.timeEnd("Total Upload");

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