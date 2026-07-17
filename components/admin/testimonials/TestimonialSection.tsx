"use client";

import { useEffect, useState } from "react";
import TestimonialForm from "./TestimonialForm";
console.log("TestimonialForm:", TestimonialForm);

interface Testimonial {
  _id: string;
  name: string;
  location: string;
  review: string;
  image: string;
  rating: number;
  featured: boolean;
}

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTestimonial, setEditingTestimonial] =
  useState<Testimonial | null>(null);

  const loadTestimonials = async () => {
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();

      if (data.success) {
        setTestimonials(data.testimonials);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Testimonials
          </h1>

          <p className="text-zinc-400 mt-1">
            {testimonials.length} Testimonials
          </p>
        </div>

        <button
         onClick={() => {
            setEditingTestimonial(null);
            setShowForm(true);
        }}
            className="rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-black transition hover:bg-amber-400"
            >
            + Add Testimonial
        </button>
      </div>

      {loading ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center">
          Loading...
        </div>
      ) : testimonials.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center text-zinc-500">
          No testimonials found.
        </div>
      ) : (
        <div className="space-y-4">
          {testimonials.map((item) => (
            <div
              key={item._id}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {item.name}
                  </h2>

                  <p className="text-zinc-400">
                    {item.location}
                  </p>

                  <p className="mt-3 text-zinc-300">
                    {item.review}
                  </p>

                  <p className="mt-3 text-amber-400">
                    ⭐ {item.rating}/5
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                        setEditingTestimonial(item);
                        setShowForm(true);
                    }}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                    >
                    Edit
                  </button>

                  <button
                    onClick={async () => {
                        if (!confirm("Delete this testimonial?")) return;

                        try {
                        const res = await fetch(`/api/testimonials/${item._id}`, {
                            method: "DELETE",
                        });

                        const data = await res.json();

                        if (!data.success) {
                            alert(data.message);
                            return;
                        }

                        alert("Testimonial deleted successfully!");

                        loadTestimonials();
                        } catch (error) {
                        console.error(error);
                        alert("Something went wrong.");
                        }
                    }}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white"
                    >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {showForm && (
        <TestimonialForm
        editingTestimonial={editingTestimonial}
        onSaved={loadTestimonials}
        onClose={() => {
            setEditingTestimonial(null);
            setShowForm(false);
            loadTestimonials();
        }}
        />
      )}
    </div>
  );
}