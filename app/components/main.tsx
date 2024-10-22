'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay the fade-in effect slightly
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white h-screen flex items-center justify-center overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-gray-800 opacity-40 transition-all duration-3000 ease-in-out`}></div>
      
      <div className={`relative z-10 flex flex-col items-center text-center px-4 transform transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Image
          src="/main.jpg"
          alt="Main Profile"
          height={250}
          width={250}
          className="rounded-full mb-4 border-4 border-gray-500 transition-transform duration-1000 ease-out hover:scale-105"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white leading-tight tracking-wide transition-transform duration-1000 ease-out hover:scale-105">
          Muskan Fatima
        </h1>
        <p className="text-lg sm:text-xl font-light text-gray-300 transition-opacity duration-700 ease-in-out delay-300">
          I’m a Frontend Developer passionate about building amazing web experiences.
        </p>
        <div className="flex space-x-6 p-4 mt-6">
          <a href="https://www.linkedin.com/in/muskan-fatima-ab90732b7/" className="px-6 py-3 bg-white text-gray-600 font-semibold rounded-full shadow-lg hover:bg-gray-300 transition duration-500 ease-in-out transform hover:-translate-y-1">
            Talk on LinkedIn
          </a>
          <a href="mushiifatima3456@gmail.com" className="px-6 py-3 bg-white text-gray-600 font-semibold rounded-full shadow-lg hover:bg-gray-300 transition duration-500 ease-in-out transform hover:-translate-y-1">
            Contact via Email
          </a>
        </div>
      </div>
    </section>
  );
}
