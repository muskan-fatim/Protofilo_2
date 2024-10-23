import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navbar from "./components/nav";
import { Agdasima, Anybody } from "next/font/google";

const agdasima = Agdasima({
  subsets: ["latin"],
  weight: ["400"], 
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Describe my all details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={agdasima.className}>
      <Head>
        <meta property="og:title" content="Muskan's Portfolio" />
        <meta property="og:description" content="Explore my web development projects using Next.js and Tailwind CSS." />
        <meta property="og:image" content="https://protofolio-2.vercel.app/images/thumbnail.jpg" />
        <meta property="og:url" content="https://protofilo-2.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="bg-gray-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
