'use client'
import { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Resume Generator",
      description: "Resume Generator website built with HTML, CSS, and JavaScript from scratch.",
      link: "https://resume-generator-azure.vercel.app/",
      image: "/resume.PNG",
      category: "HTML & CSS",
    },  
      {
      title: "Omelete Recipe",
      description: "Practice task for improving Html Css and layout ",
      link: "https://omelete-recipe.vercel.app/",
      image: "https://omelete-recipe.vercel.app/omeley.jpg",
      category: "HTML & CSS",
    },{
       title: "snake Water Gun game",
      description: "Its a simple game of snake water gun",
      link: "https://snake-water-gun-game-three.vercel.app/",
      image:"https://snake-water-gun-game-three.vercel.app/snake.jpeg",
      category: "HTML & CSS",
    },{

      title: "Panda Clone",
      description: "Panda clone website built with Next.js and Tailwind CSS.",
      link: "https://panda-clone.vercel.app/",
      image: "/panda-background.webp",
      category: "Next.js",
    },
    {
      title: "Client Portfolio",
      description: "Portfolio website built with Next.js and Tailwind CSS.",
      link: "https://munim-arain-protofolio.vercel.app/",
      image: "/protofolio.PNG",
      category: "Next.js",
    },
    {
      title: "Blog Website",
      description: "Blog website built with Next.js and Tailwind CSS.",
      link: "https://blog-website-rho-blush.vercel.app/",
      image: "/blog.PNG",
      category: "Next.js",
    },
    {
      title: "Car Rent Website",
      description: "Car rent website with proper functionality.",
      link: "https://hackthone-3-two.vercel.app/",
      image: "/car.png",
      category: "Next.js",
    },{ 
      title: "Tech Events",
      description: "Tech events website built with Next.js and Tailwind CSS.",
      link: "https://tech-event-lovat.vercel.app/",
      image: "/event.jpeg",
      category: "Next.js",
    },
      {
        title: "Adventure CLI",
        description: "A thrilling interactive CLI-based adventure game with multiple endings.",
        link: "https://www.npmjs.com/package/muskan_adventure-89",
        image: "https://www.dsogaming.com/wp-content/uploads/2011/08/da0f54_4e4b88fd652ae.jpg",  
        category: "Node.js",
      },
      {
        title: "Currency Convertor",
        description: "A thrilling interactive CLI-based adventure game with multiple endings.",
        link: "https://www.npmjs.com/package/mu_currency_converter",
        image: "https://miro.medium.com/v2/resize:fit:1200/1*B505Y3ykIlQoYLe0T97cdA.jpeg",  
        category: "Node.js",
      },{
        title:"Developer_quiz",
        description:"A Quiz CLi app to test your knowledge about Html and css",
        link:"https://www.npmjs.com/package/muskan_developer_quiz",
        image:"https://static.vecteezy.com/system/resources/previews/003/206/208/original/quiz-time-neon-signs-style-text-free-vector.jpg",
        category: "Node.js",

      }
      
    
  ];

  const categories = ["All", "HTML & CSS", "Next.js", "Node.js"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-12 bg-gradient-to-r from-pink-500 to-gray-800 pt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Projects</h2>
        <div className="flex justify-center space-x-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-white text-black" : "bg-gray-700 text-white"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
