"use client";

interface Props {
  onUpload: (url: string) => void;
}

export default function GalleryUpload({ onUpload }: Props) {
  const upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const form = new FormData();
    form.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: form,
      });

      console.log("HTTP Status:", res.status);

      const data = await res.json();

      console.log("Upload Response:", data);

      if (!res.ok) {
        alert(data.message || "Upload failed");
        return;
      }

      if (!data.url) {
        alert("Upload succeeded but no URL was returned.");
        console.log(data);
        return;
      }

      onUpload(data.url);
    } catch (err) {
      console.error("Upload Error:", err);
    }
  };

  return <input type="file" onChange={upload} />;
}