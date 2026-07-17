"use client";

import { useEffect, useState } from "react";


export default function DashboardHome() {

    const [stats, setStats] = useState({
    photos: 0,
    stories: 0,
    testimonials: 0,
    services: 0,
    });

    useEffect(() => {
    fetch("/api/dashboard")
        .then((res) => res.json())
        .then((data) => {
        if (data.success) {
            setStats(data.stats);
        }
        });
    }, []);

  return (
    <>
      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>

      <p className="text-zinc-400 mt-3 text-lg">
        Welcome back 👋
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-400">Portfolio Photos</p>
          <h2 className="text-4xl font-bold mt-2">
            {stats.photos}
            </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-400">Stories</p>
          <h2 className="text-4xl font-bold mt-2">
            {stats.stories}
            </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-400">Testimonials</p>
          <h2 className="text-4xl font-bold mt-2">
            {stats.testimonials}
            </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-400">Services</p>
          <h2 className="text-4xl font-bold mt-2">
            {stats.services}
            </h2>
        </div>

      </div>
    </>
  );
}