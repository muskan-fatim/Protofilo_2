import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 min-h-screen bg-gradient-to-r from-pink-500 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <Image
            src="/main.jpg"
            alt="Main Profile"
            height={250}
            width={250}
            className="rounded-full mb-4"
          />
          <h2 className="text-4xl font-bold text-center text-white mb-8">About Me</h2>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Hi! I'm Muskan, a passionate Frontend Developer and currently a student at
            GIAIC in Governor House. Alongside my studies, I'm pursuing a BSc degree,
            constantly enhancing my skills in TypeScript, HTML, CSS, Next.js, and Tailwind CSS.
            I enjoy turning complex designs into smooth, responsive, and visually appealing websites.
            My aim is to create engaging user experiences that leave lasting impressions. Let's work
            together to bring your ideas to life!
          </p>
        </div>
      </div>
    </section>
  );
}
