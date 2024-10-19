import { SiTypescript, SiHtml5, SiCss3, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaMobileAlt, FaPalette } from "react-icons/fa";
import Image from "next/image";

export default function Skill() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-gray-800 py-16 px-6 sm:px-12 animate-fadeIn">
      <h2 className="text-4xl font-semibold text-center text-white mb-12 animate-slideIn">My Skills</h2>
      
      <div className="relative z-10 flex flex-col items-center text-center mb-12">
        <Image
          src="/main.jpg"
          alt="Main Profile"
          height={250}
          width={250}
          className="rounded-full mb-4 animate-zoomIn"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <SiTypescript className="text-3xl text-gray-700" />
            <h3 className="text-2xl font-bold text-gray-700">TypeScript</h3>
          </div>
          <p className="text-gray-700 mt-4">Strong knowledge of TypeScript, building scalable and maintainable applications.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <SiHtml5 className="text-3xl text-gray-700" />
            <SiCss3 className="text-3xl text-gray-700" />
            <h3 className="text-2xl font-bold text-gray-700">HTML & CSS</h3>
          </div>
          <p className="text-gray-700 mt-4">Proficient in crafting clean and structured web pages with modern styling techniques.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <SiNextdotjs className="text-3xl text-gray-700" />
            <h3 className="text-2xl font-bold text-gray-700">Next.js</h3>
          </div>
          <p className="text-gray-700 mt-4">Experienced in building dynamic and SEO-friendly web applications with Next.js.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <SiTailwindcss className="text-3xl text-gray-700" />
            <h3 className="text-2xl font-bold text-gray-700">Tailwind CSS</h3>
          </div>
          <p className="text-gray-700 mt-4">Skilled at using Tailwind CSS to rapidly design modern and responsive UIs.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <FaMobileAlt className="text-3xl text-gray-700" />
            <h3 className="text-2xl font-bold text-gray-700">Responsive Design</h3>
          </div>
          <p className="text-gray-700 mt-4">Creating websites that are responsive across all devices, ensuring a seamless user experience.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <FaPalette className="text-3xl text-gray-700" />
            <h3 className="text-2xl font-bold text-gray-700">UI/UX Focused</h3>
          </div>
          <p className="text-gray-700 mt-4">Ensuring that designs are not only visually appealing but also user-friendly and intuitive.</p>
        </div>
      </div>
    </div>
  );
}
