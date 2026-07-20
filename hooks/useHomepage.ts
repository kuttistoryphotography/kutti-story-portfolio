"use client";

import { useEffect, useState } from "react";

export function useHomepage() {
  const [homepage, setHomepage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHomepage() {
      try {
        const res = await fetch("/api/homepage");
        const data = await res.json();
        setHomepage(data.settings);
      } catch (err) {
        console.error("Failed to load homepage:", err);
      } finally {
        setLoading(false);
      }
    }

    loadHomepage();
  }, []);

  return { homepage, loading };
}