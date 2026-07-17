export function optimizeCloudinaryImage(
  url: string,
  width = 1200
) {
  if (!url || !url.includes("res.cloudinary.com")) {
    return url;
  }

  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,w_${width}/`
  );
}