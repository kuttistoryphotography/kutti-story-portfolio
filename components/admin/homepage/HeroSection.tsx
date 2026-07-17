"use client";



import { useEffect, useState } from "react";

import GalleryUpload from "../gallery/GalleryUpload";



export default function HeroSection() {

  const [images, setImages] = useState<string[]>([]);

  const [saving, setSaving] = useState(false);



  const loadHero = async () => {

    const res = await fetch("/api/homepage/hero");

    const data = await res.json();



    if (data.success) {

      setImages(data.hero.images || []);

    }

  };



  useEffect(() => {

    loadHero();

  }, []);



  const saveHero = async () => {

    setSaving(true);



    const res = await fetch("/api/homepage/hero", {

      method: "PUT",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        images,

      }),

    });



    const data = await res.json();



    if (data.success) {

      alert("Hero updated successfully.");

    } else {

      alert(data.message);

    }



    setSaving(false);

  };



  return (

    <div className="space-y-6">

      <h1 className="text-3xl font-bold text-white">

        Hero Images

      </h1>



      <GalleryUpload

        onUpload={(url) =>

          setImages((prev) => [...prev, url])

        }

      />



      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

        {images.map((img, index) => (

          <div key={index} className="space-y-2">

            <img

              src={img}

              className="rounded-xl h-52 w-full object-cover"

            />



            <button

              onClick={() =>

                setImages(images.filter((_, i) => i !== index))

              }

              className="w-full rounded-lg bg-red-600 py-2 text-white"

            >

              Remove

            </button>

          </div>

        ))}

      </div>



      <button

        onClick={saveHero}

        disabled={saving}

        className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-black"

      >

        {saving ? "Saving..." : "Save Hero"}

      </button>

    </div>

  );

}