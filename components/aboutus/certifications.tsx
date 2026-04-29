"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    name: "ISO 9001",
    image: "/image/cert1.webp",
  },
  {
    name: "OEKO-TEX",
    image: "/image/cert2.webp",
  },
  {
    name: "GOTS Certified",
    image: "/image/cert3.webp",
  },
  {
    name: "Global Textile Standard",
    image: "/image/cert4.webp",
  },
];

export default function Certifications() {
  return (
    <section className="w-full py-20 px-6 md:px-20 
    bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          {/* LABEL */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5 px-5 py-2 text-[11px] tracking-[0.3em] uppercase 
            border border-plumMid/30 rounded-full 
            bg-white/60 backdrop-blur-sm text-plumMid"
          >
            Certifications
          </motion.button>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading leading-tight text-plumMid"
          >
            Trusted Standards & Compliance
          </motion.h2>

        </div>

        {/* CERTIFICATION GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {certifications.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl 
              p-6 flex items-center justify-center 
              shadow-sm hover:shadow-md transition"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-12 object-contain"
              />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}