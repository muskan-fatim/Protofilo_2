'use client'
import { useState, useEffect } from "react";
import Loading from "./loading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loading /> : children}
    </>
  );
};

export default Layout;
