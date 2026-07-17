"use client";

import CommentSection from "./comments/CommentSection";

import {
  LayoutDashboard,
  FolderOpen,
  Images,
  Clapperboard,
  Globe,
  User,
  Briefcase,
  Star,
  Phone,
  HelpCircle,
  MessageSquare,
  Settings,
} from "lucide-react";

import { useState } from "react";

import DashboardHome from "./dashboard/DashboardHome";
import StorySection from "./stories/StorySection";
import GallerySection from "./gallery/GallerySection";
import TestimonialSection from "./testimonials/TestimonialSection";
import HomepageSection from "./sections/homepage-section";
import AboutSection from "./sections/about-section";
import FilmsSection from "./sections/FilmsSection";
import ServicesSection from "./sections/services-section";
import FaqSection from "./sections/faq-section";


export default function AdminDashboard() {
  const menuItems = [
    {
      title: "GENERAL",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
      ],
    },

    {
      title: "PORTFOLIO",
      items: [
        { id: "stories", label: "Stories", icon: FolderOpen },
        { id: "gallery", label: "Gallery", icon: Images },
        { id: "films", label: "Films", icon: Clapperboard },
      ],
    },

    {
      title: "WEBSITE",
      items: [
        { id: "homepage", label: "Homepage", icon: Globe },
        { id: "about", label: "About", icon: User },
        { id: "services", label: "Services", icon: Briefcase },
        { id: "testimonials", label: "Testimonials", icon: Star },
        { id: "contact", label: "Contact", icon: Phone },
        { id: "faq", label: "FAQ", icon: HelpCircle },
      ],
    },

    {
      title: "CONTENT",
      items: [
        { id: "comments", label: "Comments", icon: MessageSquare },
      ],
    },

    {
      title: "SYSTEM",
      items: [
        { id: "settings", label: "Settings", icon: Settings },
      ],
    },
  ];

  const [activePage, setActivePage] = useState("dashboard");

  const [selectedStoryId, setSelectedStoryId] = useState("");
  const [selectedStoryTitle, setSelectedStoryTitle] = useState("");

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-[#18181B] border-r border-zinc-800 p-6 flex flex-col">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-amber-400">
            Kutti Story
          </h1>

          <p className="text-zinc-500 mt-1">
            Portfolio Admin
          </p>
        </div>

        <nav className="space-y-6">
          {menuItems.map((group) => (
            <div key={group.title}>
              <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                {group.title}
              </p>

              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActivePage(item.id)}
                      className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                        activePage === item.id
                          ? "bg-amber-500 text-black font-semibold"
                          : "text-zinc-300 hover:bg-zinc-800 hover:text-amber-400"
                      }`}
                    >
                      <Icon size={19} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-zinc-950 p-10">
        {activePage === "dashboard" && (
          <DashboardHome />
        )}

        {activePage === "stories" && (
          <StorySection
            openGallery={(storyId, title) => {
              setSelectedStoryId(storyId);
              setSelectedStoryTitle(title);
              setActivePage("gallery");
            }}
          />
        )}

        {activePage === "gallery" && (
          <GallerySection
            storyId={selectedStoryId}
            storyTitle={selectedStoryTitle}
            goBack={() => setActivePage("stories")}
          />
        )}

        {activePage === "homepage" && (
          <HomepageSection />
        )}

        {activePage === "about" && (
          <AboutSection />
        )}

        {activePage === "films" && (
          <FilmsSection />
        )}

        {activePage === "services" && (
          <ServicesSection />
        )}

        {activePage === "testimonials" && (
          <TestimonialSection />
        )}

        {activePage === "comments" && (
          <CommentSection />
        )}

        {activePage === "contact" && (
          <div className="text-2xl font-bold">
            Contact (Redirect to main page)
          </div>
        )}

        {activePage === "faq" && (
          <FaqSection />
        )}

        {activePage === "settings" && (
          <div className="text-2xl font-bold">
            Settings (Coming Soon)
          </div>
        )}
      </main>
    </div>
  );
}