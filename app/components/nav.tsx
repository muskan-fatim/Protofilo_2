'use client'
import { useState } from 'react';
import Image from 'next/image';
// @ts-ignore
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-900 text-white z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/logo.PNG"
              alt="Logo"
              height={50}
              width={50}
              className="rounded transform transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="hover:text-gray-300 transition duration-200">Home</a>
            <a href="/about" className="hover:text-gray-300 transition duration-200">About</a>
            <a href="/skill" className="hover:text-gray-300 transition duration-200">Skills</a>
            <a href="/contact" className="hover:text-gray-300 transition duration-200">Contact</a>
            <a href="/project" className="block text-white hover:text-gray-300">Project</a>


          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transform transition-transform duration-500 ease-in-out hover:rotate-90"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-800 shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4 px-4 py-2">
          <a href="/" className="block text-white hover:text-gray-300">Home</a>
          <a href="/about" className="block text-white hover:text-gray-300">About</a>
          <a href="/skill" className="block text-white hover:text-gray-300">Skills</a>
          <a href="/contact" className="block text-white hover:text-gray-300">Contact</a>
          <a href="/project" className="block text-white hover:text-gray-300">Project</a>

        </div>
      </div>
    </nav>
  );
}
