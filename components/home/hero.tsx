"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/image/fabric1.webp",
    subtitle: "Xiimba Attire Intelligence LLP",
    title: "Where Craft Meets\nIntelligent Manufacturing",
    desc: "Born in Ichalkaranji, we blend traditional weaving expertise with modern textile intelligence to deliver scalable, high-quality fabric solutions.",
  },
  {
    image: "/image/banner1.webp",
    subtitle: "Integrated Textile Solutions",
    title: "From Yarn To\nFinished Fabric",
    desc: "Advanced weaving, processing, and finishing — all under one ecosystem designed for consistency, efficiency, and global standards.",
  },
  {
    image: "/image/banner3.webp",
    subtitle: "Global Fabric Partner",
    title: "Engineered For Brands.\nBuilt For Scale.",
    desc: "From cotton to blends, dyed to finished fabrics — we support fashion and lifestyle brands with customization and bulk production.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* IMAGES */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="fabric"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000
            ${
              index === current
                ? "translate-x-0 scale-105"
                : index < current
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          />
        ))}
      </div>

      {/* OVERLAY */}
      

      {/* CONTENT */}
      <div className="absolute inset-0 z-[2] flex items-center px-16">

        <div key={current} className="max-w-xl">

          {/* SUBTITLE */}
          <p className="text-sm tracking-[0.3em] uppercase mb-4 
          bg-gradient-to-r from-[#1a0f1f] via-[#3b1c3f] to-[#6b2d5c] 
          bg-clip-text text-transparent animate-slideDown delay-1">
            {slides[current].subtitle}
          </p>

          {/* TITLE */}
          <h1 className="text-5xl font-heading leading-tight mb-6 whitespace-pre-line">
            {slides[current].title.split("\n").map((line, i) => (
              <span
                key={i}
                className={`block 
                bg-gradient-to-r from-[#1a0f1f] via-[#3b1c3f] to-[#6b2d5c] 
                bg-clip-text text-transparent animate-slideDown delay-${i + 2}`}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* DESCRIPTION */}
          <p className="leading-relaxed mb-8 
          bg-gradient-to-r from-[#1a0f1f] via-[#3b1c3f] to-[#6b2d5c] 
          bg-clip-text text-transparent animate-slideDown delay-4">
            {slides[current].desc}
          </p>

          {/* BUTTON */}
          <button className="border border-[#3b1c3f] px-6 py-3 text-sm tracking-wide 
          text-[#3b1c3f] hover:bg-[#3b1c3f] hover:text-white 
          transition duration-300 animate-slideDown delay-5">
            Explore Collection
          </button>

        </div>

      </div>

    </section>
  );
}