"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
}