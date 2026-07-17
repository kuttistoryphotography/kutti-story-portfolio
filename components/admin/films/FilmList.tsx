"use client";

import { useEffect, useState } from "react";

interface Film {
  _id: string;
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  featured: boolean;
  isActive: boolean;
  sortOrder: number;
}

export default function FilmList() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/film-items")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.films || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">
        Film Management
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-zinc-800">
        <table className="min-w-full">
          <thead className="bg-zinc-900">
            <tr>
              <th className="p-4 text-left text-white">Title</th>
              <th className="p-4 text-left text-white">Category</th>
              <th className="p-4 text-left text-white">Duration</th>
              <th className="p-4 text-left text-white">Featured</th>
              <th className="p-4 text-left text-white">Active</th>
              <th className="p-4 text-left text-white">Actions</th>
            </tr>
          </thead>

          <tbody>
            {films.map((film) => (
              <tr key={film._id} className="border-t border-zinc-800">
                <td className="p-4 text-white">{film.title}</td>
                <td className="p-4 text-zinc-300">{film.category}</td>
                <td className="p-4 text-zinc-300">{film.duration}</td>
                <td className="p-4 text-zinc-300">
                  {film.featured ? "Yes" : "No"}
                </td>
                <td className="p-4 text-zinc-300">
                  {film.isActive ? "Yes" : "No"}
                </td>
                <td className="p-4">
                  {/* Edit/Delete buttons will be added next */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}