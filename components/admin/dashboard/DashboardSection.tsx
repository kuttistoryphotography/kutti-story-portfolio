"use client";

import { Image, FolderOpen, Star, Briefcase } from "lucide-react";

const cards = [
  {
    title: "Photos",
    value: 0,
    icon: Image,
  },
  {
    title: "Stories",
    value: 0,
    icon: FolderOpen,
  },
  {
    title: "Testimonials",
    value: 0,
    icon: Star,
  },
  {
    title: "Services",
    value: 0,
    icon: Briefcase,
  },
];

export default function DashboardSection() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              <Icon className="w-8 h-8 text-amber-500 mb-4" />

              <p className="text-zinc-400">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {card.value}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}