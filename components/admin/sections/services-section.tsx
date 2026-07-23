"use client";

import React, { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Save, X, Loader2, Eye, EyeOff } from "lucide-react";
import MediaField from "@/components/ui/MediaField";
import type { MediaType } from "@/lib/media";

/* ─────────── types ─────────── */
interface Service {
  _id?: string;
  id?: string;

  title: string;
  slug: string;

  seoTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;

  primaryKeyword?: string;
  secondaryKeywords?: string[];

  aiSummary?: string;
  searchIntent?: string;

  city?: string;
  state?: string;
  country?: string;

  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;

  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;

  schemaType?: string;

  description: string;
  shortDescription?: string;

  coverImage?: string;
  coverImageType?: string;

  images?: string[];
  price?: string;
  features?: string[];

  isActive: boolean;
  sortOrder: number;
  icon?: string;
}

interface HeroData {
  heading: string; subheading: string; paragraph: string;
  heroImage: string; heroImageType: MediaType;
  heroVideo: string; heroVideoType: MediaType;
}

interface ShowcaseData {
  heading: string;
  subheading: string;
  description: string;
  image: string;
  imageType: MediaType;
}

interface CardGridData {
  heading: string;
  subheading: string;
  whatsappCardTitle: string;
  whatsappCardPlaceholder: string;
  storytellingCardTitle: string;
  storytellingCardDescription: string;
  storytellingCardImage: string;
  storytellingCardImageType: MediaType;
  storytellingCardLearnMoreLink: string;
  expertCardTitle: string;
  expertCount: string;
  expertCardTagline: string;
}

const HERO_DEF: HeroData = {
  heading: "", subheading: "", paragraph: "",
  heroImage: "", heroImageType: "image",
  heroVideo: "", heroVideoType: "video",
};

const SHOWCASE_DEF: ShowcaseData = {
  heading: "Our Services",
  subheading: "What We Offer",
  description:
    "Every frame tells a story. Discover our range of photography services.",
  image: "",
  imageType: "image",
};

const CARDGRID_DEF: CardGridData = {
  heading: "Explore Our Services",
  subheading: "Our Collection",
  whatsappCardTitle: "Guidance you can trust",
  whatsappCardPlaceholder: "Ask us anything...",
  storytellingCardTitle: "Candid Storytelling",
  storytellingCardDescription: "Starting your journey of memories today.",
  storytellingCardImage: "", storytellingCardImageType: "image",
  storytellingCardLearnMoreLink: "/works",
  expertCardTitle: "A New Dimension of Wellness",
  expertCount: "52+", expertCardTagline: "join with us",
};

type Tab = "services" | "page" | "showcase";

/* ─────────── component ─────────── */
export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<Tab>("services");

  /* service list */
  const [services,    setServices]    = useState<Service[]>([]);
  const [loading,     setLoading]     = useState(true);
  const [showModal,   setShowModal]   = useState(false);
  const [editing,     setEditing]     = useState<Service | null>(null);
  const [saving,      setSaving]      = useState(false);
  const [newFeature,  setNewFeature]  = useState("");
  const [form, setForm] = useState({
    title: "",
    slug: "",
    seoTitle: "",
    metaDescription: "",
    canonicalUrl: "",
    primaryKeyword: "",
    secondaryKeywords: [] as string[],

    aiSummary: "",
    searchIntent: "",

    city: "Madurai",
    state: "Tamil Nadu",
    country: "India",

    ogTitle: "",
    ogDescription: "",
    ogImage: "",

    twitterTitle: "",
    twitterDescription: "",
    twitterImage: "",

    schemaType: "Service",
    description: "",
    shortDescription: "",
    coverImage: "",
    coverImageType: "image" as MediaType,
    images: [] as string[],
    price: "",
    features: [] as string[],
    isActive: true,
    sortOrder: 0,
    icon: "",
  });

  /* page settings */
  const [hero,        setHero]        = useState<HeroData>(HERO_DEF);
  const [pageLoading, setPageLoading] = useState(true);
  const [pageSaving,  setPageSaving]  = useState(false);
  const [pageSaved,   setPageSaved]   = useState(false);

  /* showcase */
  const [showcase,       setShowcase]       = useState<ShowcaseData>(SHOWCASE_DEF);
  const [showcaseSaving, setShowcaseSaving] = useState(false);
  const [showcaseSaved,  setShowcaseSaved]  = useState(false);

  /* card grid */
  const [cardGrid,    setCardGrid]    = useState<CardGridData>(CARDGRID_DEF);
  const [cardSaving,  setCardSaving]  = useState(false);
  const [cardSaved,   setCardSaved]   = useState(false);

  /* contact whatsapp (read-only display) */
  const [contactWhatsapp, setContactWhatsapp] = useState("");

  const [slugEdited, setSlugEdited] = useState(false);

  const generateSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  /* ── load ── */

  const generateSEO = (force = false) => {
    if (
      !force &&
      (form.seoTitle || form.metaDescription || form.canonicalUrl)
    ) {
      const confirmOverwrite = window.confirm(
        "SEO fields already contain data.\n\nDo you want to regenerate and replace them?"
      );

      if (!confirmOverwrite) return;
    }

    setForm((prev) => ({
      ...prev,
      seoTitle: `${prev.title} | Kutti Story Photography`,
      metaDescription: `Capture timeless memories with our ${prev.title} service by Kutti Story Photography. Professional photography in Madurai with cinematic storytelling and premium albums.`,
      canonicalUrl: `/services/${prev.slug}`,
    }));
  };

  const seoChecks = [
    {
      label: "SEO Title added",
      passed: form.seoTitle.trim().length > 0,
    },
    {
      label: "SEO Title length (30–150)",
      passed:
        form.seoTitle.length >= 30 &&
        form.seoTitle.length <= 150,
    },
    {
      label: "Meta Description added",
      passed: form.metaDescription.trim().length > 0,
    },
    {
      label: "Meta Description length (80–250)",
      passed:
        form.metaDescription.length >= 80 &&
        form.metaDescription.length <= 250,
    },
    {
      label: "URL Slug exists",
      passed: form.slug.trim().length > 0,
    },
    {
      label: "Canonical URL added",
      passed: form.canonicalUrl.trim().length > 0,
    },
  ];

  const seoScore = Math.round(
    (seoChecks.filter((item) => item.passed).length / seoChecks.length) * 100
  );

  const fetchServices = async () => {
    setLoading(true);
    const res  = await fetch("/api/services?admin=true");
    const data = await res.json();
    setServices(data.services || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
    fetch("/api/services-page")
      .then((r) => r.json())
      .then((data) => {
        const s = data.settings;
        if (s?.hero)     setHero({ ...HERO_DEF,     ...s.hero });
        if (s?.showcase) setShowcase({ ...SHOWCASE_DEF, ...s.showcase });
        if (s?.cardGrid) setCardGrid({ ...CARDGRID_DEF, ...s.cardGrid });
        setPageLoading(false);
      })
      .catch(() => setPageLoading(false));

    fetch("/api/contact")
      .then((r) => r.json())
      .then((data) => setContactWhatsapp(data.settings?.whatsapp || data.settings?.phone || ""))
      .catch(() => {});
  }, []);

  /* ── service CRUD ── */
  const openCreate = () => {
    setEditing(null);
    setSlugEdited(false);

    setForm({
      title: "",
      slug: "",

      seoTitle: "",
      metaDescription: "",
      canonicalUrl: "",

      primaryKeyword: "",
      secondaryKeywords: [],

      aiSummary: "",
      searchIntent: "",

      city: "Madurai",
      state: "Tamil Nadu",
      country: "India",

      ogTitle: "",
      ogDescription: "",
      ogImage: "",

      twitterTitle: "",
      twitterDescription: "",
      twitterImage: "",

      schemaType: "Service",

      description: "",
      shortDescription: "",

      coverImage: "",
      coverImageType: "image",

      images: [],
      price: "",
      features: [],

      isActive: true,
      sortOrder: services.length,
      icon: "",
    });
    setShowModal(true);
  };
  const openEdit = (svc: Service) => {
  setEditing(svc);

  setSlugEdited(false);   

  setForm({
    title: svc.title ?? "",
    slug: svc.slug ?? "",
    seoTitle: svc.seoTitle ?? "",
    metaDescription: svc.metaDescription ?? "",
    canonicalUrl: svc.canonicalUrl ?? "",
    primaryKeyword: svc.primaryKeyword ?? "",
    secondaryKeywords: svc.secondaryKeywords ?? [],

    aiSummary: svc.aiSummary ?? "",
    searchIntent: svc.searchIntent ?? "",

    city: svc.city ?? "Madurai",
    state: svc.state ?? "Tamil Nadu",
    country: svc.country ?? "India",

    ogTitle: svc.ogTitle ?? "",
    ogDescription: svc.ogDescription ?? "",
    ogImage: svc.ogImage ?? "",

    twitterTitle: svc.twitterTitle ?? "",
    twitterDescription: svc.twitterDescription ?? "",
    twitterImage: svc.twitterImage ?? "",

    schemaType: svc.schemaType ?? "Service",
    description: svc.description ?? "",
    shortDescription: svc.shortDescription ?? "",
    coverImage: svc.coverImage ?? "",
    coverImageType: (svc.coverImageType as MediaType) ?? "image",
    images: svc.images ?? [],
    price: svc.price ?? "",
    features: svc.features ?? [],
    isActive: svc.isActive ?? true,
    sortOrder: svc.sortOrder ?? 0,
    icon: svc.icon ?? "",
  });

  setShowModal(true);
};
  const handleSave = async () => {
    if (!form.title || !form.description) return;
    setSaving(true);
    try {
      const id = editing?._id || editing?.id;
      const payload = { ...form };
      if (id) {
        await fetch("/api/services", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, ...payload }) });
      } else {
        await fetch("/api/services", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      }
      setShowModal(false);
      await fetchServices();
    } catch {}
    setSaving(false);
  };
  const handleDelete = async (svc: Service) => {
    if (!confirm(`Delete "${svc.title}"?`)) return;
    await fetch(`/api/services?id=${svc._id || svc.id}`, { method: "DELETE" });
    await fetchServices();
  };
  const toggleActive = async (svc: Service) => {
    await fetch("/api/services", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: svc._id || svc.id, isActive: !svc.isActive }) });
    await fetchServices();
  };

  /* ── save helpers ── */
  const save = async (section: string, data: object, setSaving: (v: boolean) => void, setSaved: (v: boolean) => void) => {
    setSaving(true);
    try {
      const res = await fetch("/api/services-page", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        body: JSON.stringify({
          section,
          data,
        }),
      });

      console.log("STATUS:", res.status);

      const result = await res.json();

      console.log(result);
      setSaved(true); setTimeout(() => setSaved(false), 2500);
    } catch {}
    setSaving(false);
  };

  const inputCls = "w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none";
  const labelCls = "block text-zinc-400 text-sm mb-1.5";

  const tabs: { id: Tab; label: string }[] = [
    { id: "services", label: "Service Cards" },
    { id: "page",     label: "Page Settings" },
    { id: "showcase", label: "Showcase & Cards" },
  ];

  /* ════════════ render ════════════ */
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Services</h2>
        {activeTab === "services" && (
          <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-sm transition-colors">
            <Plus className="w-4 h-4" /> Add Service
          </button>
        )}
        {activeTab === "page"     && pageSaved     && <span className="text-green-400 text-sm">✓ Saved</span>}
        {activeTab === "showcase" && (showcaseSaved || cardSaved) && <span className="text-green-400 text-sm">✓ Saved</span>}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeTab === t.id ? "bg-amber-500 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ═══ SERVICE CARDS TAB ═══ */}
      {activeTab === "services" && (
        loading
          ? <div className="flex justify-center py-16"><Loader2 className="w-7 h-7 text-white animate-spin" /></div>
          : (
            <div className="space-y-3">
              {services.length === 0 && <p className="text-zinc-500">No services yet.</p>}
              {services.map((svc) => (
                <div key={svc._id || svc.id} className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 flex items-center gap-4">
                  {svc.coverImage
                    ? <img src={svc.coverImage.includes("drive.google") || svc.coverImage.includes("lh3.google") ? `https://lh3.googleusercontent.com/d/${svc.coverImage.match(/\/d\/([a-zA-Z0-9_-]{10,})/)?.[1]}=w200` : (svc.coverImage.includes("res.cloudinary.com") ? svc.coverImage.replace("/upload/", "/upload/w_200,q_auto,f_auto/") : svc.coverImage)} className="w-16 h-16 object-cover rounded-xl flex-shrink-0 border border-zinc-700" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    : <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 flex-shrink-0 text-2xl">{svc.icon || "📷"}</div>
                  }
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white">{svc.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${svc.isActive ? "bg-green-500/20 text-green-400" : "bg-zinc-700 text-zinc-400"}`}>
                        {svc.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm mt-0.5 line-clamp-1">{svc.shortDescription || svc.description}</p>
                    <div className="flex gap-3 mt-1 text-xs text-zinc-500">
                      {svc.price && <span>₹{svc.price}</span>}
                      {svc.features?.length ? <span>{svc.features.length} features</span> : null}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button onClick={() => openEdit(svc)} className="p-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-colors"><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => toggleActive(svc)} className={`p-2 rounded-xl transition-colors ${svc.isActive ? "bg-zinc-700 hover:bg-zinc-600 text-zinc-300" : "bg-green-700 hover:bg-green-600 text-white"}`}>
                      {svc.isActive ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button onClick={() => handleDelete(svc)} className="p-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 rounded-xl transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          )
      )}

      {/* ═══ PAGE SETTINGS TAB ═══ */}
      {activeTab === "page" && (
        pageLoading
          ? <div className="flex justify-center py-16"><Loader2 className="w-7 h-7 text-white animate-spin" /></div>
          : (
            <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">
              <div>
                <h3 className="text-white font-semibold text-lg">Services Page Hero</h3>
                <p className="text-zinc-500 text-sm mt-1">Controls the hero section heading, subheading, paragraph, and right-side media.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { key: "heading",    label: "Main Heading",  ph: "Moments Over Matter — Motion in Time" },
                  { key: "subheading", label: "Subheading",    ph: "Our Services" },
                ].map(({ key, label, ph }) => (
                  <div key={key}>
                    <label className={labelCls}>{label}</label>
                    <input value={(hero as any)[key]} placeholder={ph}
                      onChange={(e) => setHero({ ...hero, [key]: e.target.value })}
                      className={inputCls} />
                  </div>
                ))}
                
              </div>

              {/* Hero Image — only images allowed */}
              <MediaField
                label="Hero Image"
                url={hero.heroImage}
                mediaType={hero.heroImageType}
                allowedTypes={["image"]}
                onChange={(url, mediaType) => setHero({ ...hero, heroImage: url, heroImageType: mediaType })}
                context="services"
                previewHeight="h-40"
              />

              {/* Hero Video — only videos allowed */}
              <MediaField
                label="Hero Video (overrides image when set)"
                url={hero.heroVideo}
                mediaType={"image"}
                allowedTypes={["image"]}
                onChange={(url, mediaType) => setHero({ ...hero, heroVideo: url, heroVideoType: mediaType })}
                context="services"
                previewHeight="h-40"
              />

              <button onClick={() => save("hero", hero, setPageSaving, setPageSaved)} disabled={pageSaving}
                className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-sm transition-colors disabled:opacity-50">
                {pageSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {pageSaved ? "Saved ✓" : "Save Page Settings"}
              </button>
            </div>
          )
      )}

      {/* ═══ SHOWCASE & CARDS TAB ═══ */}
      {activeTab === "showcase" && (
        pageLoading
          ? <div className="flex justify-center py-16"><Loader2 className="w-7 h-7 text-white animate-spin" /></div>
          : (
            <div className="space-y-6">
              
              {/* Photography Showcase header */}
              <div className="bg-zinc-900 rounded-2xl p-6 space-y-5">
                <div>
                  <h3 className="text-white font-semibold text-lg">Photography Showcase</h3>
                  <p className="text-zinc-500 text-sm mt-1">
                    Heading, subheading and description shown above the service grid mosaic.
                    Service tile images come from the <strong className="text-zinc-300">Service Cards</strong> tab.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Heading</label>
                    <input value={showcase.heading} placeholder="Our Services"
                      onChange={(e) => setShowcase({ ...showcase, heading: e.target.value })}
                      className={inputCls} />
                  </div>
                  
                  <div>
                    <label className={labelCls}>Subheading (label above heading)</label>
                    <input value={showcase.subheading} placeholder="What We Offer"
                      onChange={(e) => setShowcase({ ...showcase, subheading: e.target.value })}
                      className={inputCls} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>Description</label>
                    <textarea value={showcase.description}
                     rows={2}
                      placeholder="Every frame tells a story..."
                      onChange={(e) => setShowcase({ ...showcase, description: e.target.value })}
                      className={`${inputCls} resize-none`} />
                  </div>

                  <MediaField
                    label="Showcase Image"
                    url={showcase.image}
                    mediaType={showcase.imageType}
                    allowedTypes={["image"]}
                    onChange={(url, mediaType) =>
                      setShowcase({
                        ...showcase,
                        image: url,
                        imageType: mediaType,
                      })
                    }
                    context="services"
                    previewHeight="h-40"
                  />

                </div>
                <button onClick={() => save("showcase", showcase, setShowcaseSaving, setShowcaseSaved)} disabled={showcaseSaving}
                  className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-sm transition-colors disabled:opacity-50">
                  {showcaseSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {showcaseSaved ? "Saved ✓" : "Save Showcase Settings"}
                </button>
              </div>

              {/* Service Card Grid */}
              <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">Service Card Grid</h3>
                  <p className="text-zinc-500 text-sm mt-1">
                    Manages the three glass cards below the showcase. WhatsApp number comes from{" "}
                    <strong className="text-zinc-300">Contact Settings</strong> automatically.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

                    <div>
                      <label className={labelCls}>Section Heading</label>
                      <input
                        value={cardGrid.heading}
                        onChange={(e) =>
                          setCardGrid({
                            ...cardGrid,
                            heading: e.target.value,
                          })
                        }
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className={labelCls}>Section Label</label>
                      <input
                        value={cardGrid.subheading}
                        onChange={(e) =>
                          setCardGrid({
                            ...cardGrid,
                            subheading: e.target.value,
                          })
                        }
                        className={inputCls}
                      />
                    </div>

                  </div>
                  {contactWhatsapp && (
                    <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-xl border border-zinc-700 text-sm">
                      <span className="text-zinc-400 text-xs">WhatsApp:</span>
                      <span className="text-green-400 font-semibold">{contactWhatsapp}</span>
                    </div>
                  )}
                </div>

                {/* Card 1 — WhatsApp */}
                <fieldset className="border border-zinc-700 rounded-xl p-4 space-y-3">
                  <legend className="text-xs text-zinc-400 px-2 uppercase tracking-widest">Card 1 — WhatsApp Contact</legend>
                  <div>
                    <label className={labelCls}>Card Title</label>
                    <input value={cardGrid.whatsappCardTitle}
                      onChange={(e) => setCardGrid({ ...cardGrid, whatsappCardTitle: e.target.value })}
                      className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Input Placeholder</label>
                    <input value={cardGrid.whatsappCardPlaceholder}
                      onChange={(e) => setCardGrid({ ...cardGrid, whatsappCardPlaceholder: e.target.value })}
                      className={inputCls} />
                  </div>
                </fieldset>

                {/* Card 2 — Featured Story */}
                <fieldset className="border border-zinc-700 rounded-xl p-4 space-y-4">
                  <legend className="text-xs text-zinc-400 px-2 uppercase tracking-widest">Card 2 — Featured Story</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Card Title</label>
                      <input value={cardGrid.storytellingCardTitle}
                        onChange={(e) => setCardGrid({ ...cardGrid, storytellingCardTitle: e.target.value })}
                        className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Learn More Link</label>
                      <input value={cardGrid.storytellingCardLearnMoreLink} placeholder="/works"
                        onChange={(e) => setCardGrid({ ...cardGrid, storytellingCardLearnMoreLink: e.target.value })}
                        className={inputCls} />
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelCls}>Description</label>
                      <textarea 
                        value={cardGrid.storytellingCardDescription} rows={2}
                        onChange={(e) =>
                           setCardGrid({ ...cardGrid, storytellingCardDescription: e.target.value })}
                        className={`${inputCls} resize-none`} />
                    </div>
                  </div>
                  {/* allowedTypes: image or video — admin picks which */}
                  <MediaField
                    label="Card Media (image or video)"
                    url={cardGrid.storytellingCardImage}
                    mediaType={cardGrid.storytellingCardImageType}
                    allowedTypes={["image", "video"]}
                    onChange={(url, mediaType) => setCardGrid({ ...cardGrid, storytellingCardImage: url, storytellingCardImageType: mediaType })}
                    context="services"
                    previewHeight="h-32"
                  />
                </fieldset>

                

                <button onClick={() => save("cardGrid", cardGrid, setCardSaving, setCardSaved)} disabled={cardSaving}
                  className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-sm transition-colors disabled:opacity-50">
                  {cardSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {cardSaved ? "Saved ✓" : "Save Card Grid Settings"}
                </button>
              </div>

            </div>
          )
      )}

      {/* ═══ SERVICE MODAL ═══ */}
      {showModal && (
        <div className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 rounded-2xl w-full max-w-2xl border border-zinc-700 shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <h3 className="text-white font-bold text-lg">{editing ? "Edit Service" : "Add Service"}</h3>
              <button onClick={() => setShowModal(false)}><X className="w-5 h-5 text-zinc-400 hover:text-white" /></button>
            </div>
            <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-4">

                  <div>
                    <label className={labelCls}>Service Title *</label>

                    <input
                      value={form.title}
                      onChange={(e) => {
                      const title = e.target.value;

                      setForm((prev) => ({
                        ...prev,
                        title,
                        slug: slugEdited ? prev.slug : generateSlug(title),
                      }));
                    }}
                      placeholder="e.g. Wedding Photography"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className={labelCls}>URL Slug</label>

                      <button
                        type="button"
                        onClick={() => {
                          setSlugEdited(false);

                          setForm({
                            ...form,
                            slug: generateSlug(form.title),
                          });
                        }}
                        className="text-xs text-amber-400 hover:text-amber-300"
                      >
                        Regenerate
                      </button>
                    </div>

                    <input
                      value={form.slug}
                      onChange={(e) => {
                        setSlugEdited(true);

                        setForm({
                          ...form,
                          slug: generateSlug(e.target.value),
                        });
                      }}
                      placeholder="wedding-photography"
                      className={inputCls}
                    />

                    <p className="text-xs text-zinc-500 mt-1">
                      /services/{form.slug || "your-slug"}
                    </p>
                  </div>

                </div>
                <div>
                  <label className={labelCls}>Starting Price</label>
                  <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="e.g. 25,000" className={inputCls} />
                </div>
              </div>

              <div>
                <label className={labelCls}>Short Description</label>
                <input value={form.shortDescription} onChange={(e) => setForm({ ...form, shortDescription: e.target.value })} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Full Description *</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className={`${inputCls} resize-none`} />
              </div>

              {/* SEO Settings */}
              <div className="border border-zinc-700 rounded-xl p-5 space-y-5">
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h4 className="text-white font-semibold">
                      SEO Settings
                    </h4>

                    <p className="text-zinc-500 text-xs mt-1">
                      Optimize this service for Google and other search engines.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => generateSEO()}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    ✨ Generate SEO
                  </button>

                </div>

                {/* SEO Title */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className={labelCls}>SEO Title</label>

                    <span
                      className={`text-xs font-medium ${
                        form.seoTitle.length === 0
                          ? "text-zinc-500"
                          : form.seoTitle.length < 30
                          ? "text-yellow-400"
                          : form.seoTitle.length <= 150
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {form.seoTitle.length}/150{" "}
                      {form.seoTitle.length === 0
                        ? ""
                        : form.seoTitle.length < 30
                        ? "• Needs Improvement"
                        : form.seoTitle.length <= 150
                        ? "• Good"
                        : "• Too Long"}
                    </span>
                  </div>

                  <input
                    value={form.seoTitle}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        seoTitle: e.target.value,
                      })
                    }
                    placeholder="Best Wedding Photography in Madurai | Kutti Story"
                    className={inputCls}
                  />
                  
                  <div className="mt-2 h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        form.seoTitle.length === 0
                          ? "bg-zinc-600"
                          : form.seoTitle.length < 30
                          ? "bg-yellow-500"
                          : form.seoTitle.length <= 150
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                      style={{
                        width: `${Math.min((form.seoTitle.length / 150) * 100, 100)}%`,
                      }}
                    />
                  </div>

                </div>

                {/* Meta Description */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className={labelCls}>Meta Description</label>

                    <span
                      className={`text-xs font-medium ${
                        form.metaDescription.length === 0
                          ? "text-zinc-500"
                          : form.metaDescription.length < 80
                          ? "text-yellow-400"
                          : form.metaDescription.length <= 250
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {form.metaDescription.length}/250{" "}
                      {form.metaDescription.length === 0
                        ? ""
                        : form.metaDescription.length < 80
                        ? "• Needs Improvement"
                        : form.metaDescription.length <= 250
                        ? "• Good"
                        : "• Too Long"}
                    </span>
                  </div>

                  <textarea
                    rows={3}
                    value={form.metaDescription}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        metaDescription: e.target.value,
                      })
                    }
                    placeholder="Capture timeless wedding memories with Kutti Story Photography in Madurai."
                    className={`${inputCls} resize-none`}
                  />
                  
                  <div className="mt-2 h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        form.metaDescription.length === 0
                          ? "bg-zinc-600"
                          : form.metaDescription.length < 80
                          ? "bg-yellow-500"
                          : form.metaDescription.length <= 250
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                      style={{
                        width: `${Math.min((form.metaDescription.length / 250) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Canonical URL */}
                <div>
                  <label className={labelCls}>Canonical URL</label>

                  <input
                    value={form.canonicalUrl}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        canonicalUrl: e.target.value,
                      })
                    }
                    placeholder="/services/wedding-photography"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>Primary Keyword</label>

                  <input
                    value={form.primaryKeyword}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        primaryKeyword: e.target.value,
                      })
                    }
                    placeholder="Wedding Photography Madurai"
                    className={inputCls}
                  />

                  <p className="text-xs text-zinc-500 mt-1">
                    Main keyword you want this page to rank for.
                  </p>
                </div>

                <div>
                  <label className={labelCls}>Secondary Keywords</label>

                  <input
                    value={form.secondaryKeywords.join(", ")}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        secondaryKeywords: e.target.value
                          .split(",")
                          .map((k) => k.trim())
                          .filter(Boolean),
                      })
                    }
                    placeholder="Candid Photography, Wedding Photographer, Pre Wedding Shoot"
                    className={inputCls}
                  />

                  <p className="text-xs text-zinc-500 mt-1">
                    Separate multiple keywords with commas.
                  </p>
                </div>

                <div>
                  <label className={labelCls}>AI Summary</label>

                  <textarea
                    rows={3}
                    value={form.aiSummary}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        aiSummary: e.target.value,
                      })
                    }
                    placeholder="Summarize this service in 2–3 sentences for AI search engines."
                    className={`${inputCls} resize-none`}
                  />

                  <p className="text-xs text-zinc-500 mt-1">
                    Used for AI-powered search engines and future AI-generated snippets.
                  </p>
                </div>

                <div>
                  <label className={labelCls}>Search Intent</label>

                  <select
                    value={form.searchIntent}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        searchIntent: e.target.value,
                      })
                    }
                    className={inputCls}
                  >
                    <option value="">Select Intent</option>
                    <option value="Informational">Informational</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Transactional">Transactional</option>
                    <option value="Navigational">Navigational</option>
                  </select>

                  <p className="text-xs text-zinc-500 mt-1">
                    Helps classify what visitors are looking for.
                  </p>
                </div>

                <div className="border border-zinc-700 rounded-xl p-5 space-y-4">
                  <h4 className="text-white font-semibold">
                    GEO SEO
                  </h4>

                  <p className="text-zinc-500 text-xs">
                    Helps local search engines understand your service location.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div>
                      <label className={labelCls}>City</label>

                      <input
                        value={form.city}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            city: e.target.value,
                          })
                        }
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className={labelCls}>State</label>

                      <input
                        value={form.state}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            state: e.target.value,
                          })
                        }
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className={labelCls}>Country</label>

                      <input
                        value={form.country}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            country: e.target.value,
                          })
                        }
                        className={inputCls}
                      />
                    </div>

                  </div>
                </div>

                <div className="border border-zinc-700 rounded-xl p-5 space-y-5">
                  <h4 className="text-white font-semibold">
                    Open Graph (Social Sharing)
                  </h4>

                  <p className="text-zinc-500 text-xs">
                    Controls how this page appears when shared on WhatsApp, Facebook and LinkedIn.
                  </p>

                  <div>
                    <label className={labelCls}>Open Graph Title</label>

                    <input
                      value={form.ogTitle}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          ogTitle: e.target.value,
                        })
                      }
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className={labelCls}>Open Graph Description</label>

                    <textarea
                      rows={3}
                      value={form.ogDescription}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          ogDescription: e.target.value,
                        })
                      }
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <MediaField
                    label="Open Graph Image"
                    url={form.ogImage}
                    mediaType="image"
                    allowedTypes={["image"]}
                    onChange={(url) =>
                      setForm({
                        ...form,
                        ogImage: url,
                      })
                    }
                    context="services"
                    previewHeight="h-32"
                  />
                </div>

                <div className="border border-zinc-700 rounded-xl p-5 space-y-5">
                  <h4 className="text-white font-semibold">
                    Twitter Card
                  </h4>

                  <p className="text-zinc-500 text-xs">
                    Controls how this page appears when shared on X (Twitter).
                  </p>

                  <div>
                    <label className={labelCls}>Twitter Title</label>

                    <input
                      value={form.twitterTitle}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          twitterTitle: e.target.value,
                        })
                      }
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className={labelCls}>Twitter Description</label>

                    <textarea
                      rows={3}
                      value={form.twitterDescription}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          twitterDescription: e.target.value,
                        })
                      }
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <MediaField
                    label="Twitter Image"
                    url={form.twitterImage}
                    mediaType="image"
                    allowedTypes={["image"]}
                    onChange={(url) =>
                      setForm({
                        ...form,
                        twitterImage: url,
                      })
                    }
                    context="services"
                    previewHeight="h-32"
                  />
                </div>

                <div className="border border-zinc-700 rounded-xl p-5 space-y-4">
                  <h4 className="text-white font-semibold">
                    Structured Data
                  </h4>

                  <p className="text-zinc-500 text-xs">
                    Helps Google understand the type of this page.
                  </p>

                  <label className={labelCls}>
                    Schema Type
                  </label>

                  <select
                    value={form.schemaType}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        schemaType: e.target.value,
                      })
                    }
                    className={inputCls}
                  >
                    <option value="Service">Service</option>
                    <option value="Product">Product</option>
                    <option value="LocalBusiness">Local Business</option>
                    <option value="CreativeWork">Creative Work</option>
                  </select>
                </div>

              </div>

              <div className="border border-zinc-700 rounded-xl p-5">

                <p className="text-xs text-zinc-500 mb-3">
                  Google Search Preview
                </p>

                <div className="space-y-1">

                  <div className="text-blue-400 text-lg hover:underline cursor-pointer">
                    {form.seoTitle || form.title || "Your Service Title"}
                  </div>

                  <div className="text-green-500 text-sm">
                    http://localhost:3000/services/{form.slug || "your-slug"}
                  </div>

                  <div className="text-zinc-300 text-sm">
                    {form.metaDescription ||
                      "Your meta description will appear here exactly like Google search results."}
                  </div>

                </div>

              </div>

              <div className="border border-zinc-700 rounded-xl p-5 space-y-4">

                <div className="flex items-center justify-between">
                  <h4 className="text-white font-semibold">
                    SEO Analysis
                  </h4>

                  <span
                    className={`font-bold ${
                      seoScore >= 80
                        ? "text-green-400"
                        : seoScore >= 50
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {seoScore}/100
                  </span>
                </div>

                <div className="space-y-2">
                  {seoChecks.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-zinc-300">
                        {item.label}
                      </span>

                      <span
                        className={
                          item.passed
                            ? "text-green-400"
                            : "text-red-400"
                        }
                      >
                        {item.passed ? "✓" : "✗"}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Cover image — only images for service tiles */}
              <MediaField
                label="Cover Image"
                url={form.coverImage}
                mediaType={form.coverImageType}
                allowedTypes={["image"]}
                onChange={(url, mediaType) => setForm({ ...form, coverImage: url, coverImageType: mediaType })}
                context="services"
                previewHeight="h-32"
              />

              {/* Gallery */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-zinc-400 text-sm font-medium">Gallery Images ({form.images.length})</label>
                  <button type="button" onClick={() => setForm({ ...form, images: [...form.images, ""] })}
                    className="text-xs px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors">+ Add Slot</button>
                </div>
                <div className="space-y-3">
                  {form.images.map((img, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <div className="flex-1">
                        <MediaField
                          label={`Image ${i + 1}`}
                          url={img}
                          mediaType="image"
                          allowedTypes={["image"]}
                          onChange={(url) => { const imgs = [...form.images]; imgs[i] = url; setForm({ ...form, images: imgs }); }}
                          context="services"
                          previewHeight="h-20"
                        />
                      </div>
                      <button type="button" onClick={() => setForm({ ...form, images: form.images.filter((_, idx) => idx !== i) })}
                        className="mt-6 p-2 text-red-400 hover:text-red-300 shrink-0"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <label className={labelCls}>Features / Highlights</label>
                <div className="flex gap-2 mb-2">
                  <input value={newFeature} onChange={(e) => setNewFeature(e.target.value)} placeholder="e.g. Same day editing"
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white text-sm focus:border-amber-500 focus:outline-none"
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); if (newFeature.trim()) { setForm({ ...form, features: [...form.features, newFeature.trim()] }); setNewFeature(""); } } }} />
                  <button onClick={() => { if (newFeature.trim()) { setForm({ ...form, features: [...form.features, newFeature.trim()] }); setNewFeature(""); } }}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-medium">Add</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {form.features.map((f, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700">
                      {f} <button onClick={() => setForm({ ...form, features: form.features.filter((_, idx) => idx !== i) })} className="text-zinc-500 hover:text-red-400">×</button>
                    </span>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} className="w-4 h-4 rounded" />
                <span className="text-zinc-400 text-sm">Show on website</span>
              </label>
            </div>

            <div className="flex justify-end gap-3 p-6 border-t border-zinc-800">
              <button onClick={() => setShowModal(false)} className="px-5 py-2.5 text-sm text-zinc-400 hover:text-white bg-zinc-800 rounded-xl transition-colors">Cancel</button>
              <button onClick={handleSave} disabled={saving || !form.title || !form.description}
                className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-sm transition-colors disabled:opacity-50">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {editing ? "Update Service" : "Add Service"}
              </button>
            </div>
          </div>
        </div>
      )}
    <div className="h-10 bg-white-500"></div>
    </div>
  );
}