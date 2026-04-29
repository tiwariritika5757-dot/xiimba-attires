"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    title: "Woven Fabrics",
    images: ["/image/fabric1.webp", "/image/fabric2.webp"],
  },
  {
    title: "Cotton Fabrics",
    images: ["/image/fabric3.webp", "/image/fabric4.webp"],
  },
  {
    title: "Polyester Blends",
    images: ["/image/fabric5.webp", "/image/fabric6.webp"],
  },
  {
    title: "Viscose & Blends",
    images: ["/image/fabric7.webp", "/image/fabric8.webp"],
  },
  {
    title: "Custom Weave Developments",
    images: ["/image/fabric9.webp", "/image/fabric10.webp"],
  },
  {
    title: "Processed Fabrics",
    images: ["/image/fabric11.webp", "/image/fabric12.webp"],
  },
  {
    title: "Dyed Fabrics",
    images: ["/image/fabric13.webp", "/image/fabric14.webp"],
  },
  {
    title: "Printed Fabrics",
    images: ["/image/fabric15.webp", "/image/fabric16.webp"],
  },
  {
    title: "Finished & Treated",
    images: ["/image/fabric17.webp", "/image/fabric18.webp"],
  },
];

export default function FabricCategories() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="w-full py-28 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading">
            Explore Our Fabric Range
          </h2>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition
              ${
                activeCategory.title === cat.title
                  ? "bg-white text-black"
                  : "bg-white/10 border-white/20"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* IMAGES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {activeCategory.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src={img}
                alt="fabric"
                className="w-full h-[300px] object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}