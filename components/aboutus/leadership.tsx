"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Rahul Desai",
    role: "Founder & Managing Director",
    image: "/image/leader1.webp",
  },
  {
    name: "Anita Kulkarni",
    role: "Head of Operations",
    image: "/image/leader2.webp",
  },
  {
    name: "Vikram Patil",
    role: "Technical Director",
    image: "/image/leader3.webp",
  },
];

export default function Leadership() {
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-5 px-5 py-2 text-[11px] tracking-[0.3em] uppercase 
            border border-plumMid/30 rounded-full 
            bg-white/60 backdrop-blur-sm text-plumMid"
          >
            Leadership
          </motion.button>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading leading-tight text-plumMid"
          >
            Meet the Leadership Team
          </motion.h2>

        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md border border-gray-200 
              rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >

              {/* IMAGE */}
              <div className="w-full h-[260px] overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-lg font-semibold text-plumMid mb-1">
                  {leader.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {leader.role}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}