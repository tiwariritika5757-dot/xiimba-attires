"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Cotton Fabrics",
    desc: "Breathable, soft, and versatile fabrics ideal for everyday wear.",
    image: "/image/fabric1.webp",
  },
  {
    title: "Polyester Blends",
    desc: "Durable and wrinkle-resistant fabrics designed for performance.",
    image: "/image/fabric2.webp",
  },
  {
    title: "Viscose & Blends",
    desc: "Smooth textures with a premium feel for modern apparel.",
    image: "/image/fabric3.webp",
  },
  {
    title: "Custom Developments",
    desc: "Tailored fabric solutions crafted to meet unique requirements.",
    image: "/image/fabric4.webp",
  },
];

export default function FabricCategories() {
  return (
    <section className="w-full py-28 px-6 md:px-20 
    bg-gradient-to-br from-plumStart via-plumMid to-plumEnd text-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-6 py-2 text-[11px] tracking-[0.35em] uppercase 
            border border-white/30 rounded-full 
            bg-white/10 backdrop-blur-md text-white"
          >
            Fabric Categories
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-heading leading-tight max-w-3xl mx-auto"
          >
            Explore Our Fabric Range
          </motion.h2>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >

              {/* IMAGE */}
              <div className="h-[320px] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover 
                  group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 z-10">

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-white/80 text-xs leading-relaxed opacity-0 
                group-hover:opacity-100 transition duration-300">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}