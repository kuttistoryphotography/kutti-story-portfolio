import Image, { ImageProps } from "next/image";
import { optimizeCloudinaryImage } from "@/lib/cloudinary-image";

type CloudinaryImageProps = Omit<ImageProps, "alt"> & {
  optimizationWidth?: number;
  alt?: string;
};

export default function CloudinaryImage({
  src,
  alt = "",
  optimizationWidth = 1200,
  ...props
}: CloudinaryImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      src={
        typeof src === "string"
          ? optimizeCloudinaryImage(src, optimizationWidth)
          : src
      }
      unoptimized
    />
  );
}