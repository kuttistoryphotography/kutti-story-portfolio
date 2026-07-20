"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

const HomepageContext = createContext<any>(null);

export function HomepageProvider({ children }: { children: ReactNode }) {
  const [homepage, setHomepage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHomepage() {
      try {
        const res = await fetch("/api/homepage");
        const data = await res.json();
        setHomepage(data.settings);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadHomepage();
  }, []);

  return (
    <HomepageContext.Provider value={{ homepage, loading }}>
      {children}
    </HomepageContext.Provider>
  );
}

export function useHomepage() {
  return useContext(HomepageContext);
}