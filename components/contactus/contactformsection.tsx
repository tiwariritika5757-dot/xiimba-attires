"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export default function ContactFormSection() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget; // ✅ SAVE FORM FIRST

  setLoading(true);
  setSuccess("");

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);

    if (res.ok) {
      setSuccess("Message sent successfully ✅");
      form.reset(); // ✅ USE SAVED FORM
    } else {
      setSuccess(result.error || "Something went wrong ❌");
    }

  } catch (error) {
    console.error(error);
    setSuccess("Error sending message ❌");
  }

  setLoading(false);
};
  return (
    <section className="w-full py-32 px-6 md:px-20 bg-gradient-to-br from-lightStart via-lightMid to-lightEnd">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm"
        >

          <h2 className="text-2xl font-heading text-plumMid mb-6">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-plumMid outline-none text-sm"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-plumMid outline-none text-sm"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-plumMid outline-none text-sm"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-plumMid outline-none text-sm"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-plumMid text-white text-sm tracking-wide hover:bg-plumDark transition shadow-md"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-sm text-green-600">{success}</p>
            )}

          </form>

        </motion.div>

        {/* RIGHT SIDE (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >

          <div>
            <h3 className="text-3xl md:text-4xl font-heading text-plumMid mb-4">
              Let’s Start a Conversation
            </h3>

            <p className="text-gray-600 text-sm md:text-base max-w-md">
              Whether you’re looking for custom fabric development or ready stock solutions, 
              our team is here to support you at every stage.
            </p>
          </div>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-plumMid">✓</span>
              <p>Quick response within 24 hours</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-plumMid">✓</span>
              <p>Support for bulk & custom requirements</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-plumMid">✓</span>
              <p>Reliable supply & consistent quality</p>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-plumMid font-semibold">📍 Address</p>
              <p className="text-gray-600">
                B-32, 4th Floor, Sector -2, Noida – 201301, U.P.
              </p>
            </div>

            <div>
              <p className="text-plumMid font-semibold">📞 Phone</p>
              <p className="text-gray-600">+91 XXXXX XXXXX</p>
            </div>

            <div>
              <p className="text-plumMid font-semibold">✉️ Email</p>
              <p className="text-gray-600">info@xiimba.com</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}