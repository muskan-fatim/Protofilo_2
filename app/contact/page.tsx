'use client'
import { FaTwitter, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function ContactMe() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setAnimate(true);
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-pink-400 to-gray-800 h-screen flex justify-center items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">Get in Touch</h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* LinkedIn Card */}
          <div
            className={`bg-white text-gray-900 shadow-gray-200 rounded-lg shadow-md p-6 text-center flex flex-col items-center transform transition-all ${animate ? 'animate-slide-left' : ''} hover:bg-gray-100 hover:shadow-2xl hover:text-pink-500`}
          >
            <FaLinkedin className="text-4xl mb-4 transition-transform duration-200 ease-in-out" />
            <a
              href="https://www.linkedin.com/in/muskan-fatima-ab90732b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:underline transition-colors duration-300 ease-in-out"
            >
              @Muskan Fatima
            </a>
            <p className="text-sm mt-2">LinkedIn</p>
          </div>

          {/* Email Card */}
          <div
            className={`bg-white text-gray-900 shadow-gray-200 rounded-lg shadow-md p-6 text-center flex flex-col items-center transform transition-all ${animate ? 'animate-slide-up' : ''} hover:bg-gray-100 hover:shadow-2xl hover:text-pink-500`}
          >
            <FaEnvelope className="text-4xl mb-4 transition-transform duration-200 ease-in-out" />
            <a
              href="mailto:mushiifatima3456@gmail.com"
              className="text-xl font-semibold hover:underline transition-colors duration-300 ease-in-out"
            >
              mushiifatima3456@gmail.com
            </a>
            <p className="text-sm mt-2">Email</p>
          </div>

          {/* GitHub Card */}
          <div
            className={`bg-white text-gray-900 shadow-gray-200 rounded-lg shadow-md p-6 text-center flex flex-col items-center h-52 transform transition-all ${animate ? 'animate-slide-right' : ''} hover:bg-gray-100 hover:shadow-2xl hover:text-pink-500`}
          >
            <FaGithub className="text-4xl mb-4 transition-transform duration-200 ease-in-out" />
            <a
              href="https://github.com/muskan-fatim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:underline transition-colors duration-300 ease-in-out"
            >
              muskan-fatim
            </a>
            <p className="text-sm mt-2">GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
}
