"use client";

export default function Footer() {
  return (
    <footer className="bg-[#faf7fb] px-6 pt-20 pb-10">

      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-heading font-bold tracking-[0.2em] text-charcoal mb-4">
              XIIMBA
            </h2>

            <p className="text-sm text-charcoal/70 leading-relaxed max-w-xs">
              Intelligent textile manufacturing driven by design, precision, and scalability.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm font-semibold text-charcoal mb-4 tracking-wide">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm text-charcoal/70">
              {[
                "Home",
                "About Us",
                "What We Do",
                "Our Fabrics",
                "Sustainability",
                "Contact Us",
              ].map((item, i) => (
                <li key={i} className="hover:text-charcoal transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-charcoal mb-4 tracking-wide">
              Contact
            </h3>

            <p className="text-sm text-charcoal/70 leading-relaxed">
              B-32, 4th Floor, Sector -2,
              <br />
              Noida – 201301,
              <br />
              Uttar Pradesh, India
            </p>

            <p className="text-sm text-charcoal/70 mt-4">
              Email: info@xiimba.com
            </p>

            <p className="text-sm text-charcoal/70">
              Phone: +91 XXXXX XXXXX
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-charcoal/60">

          <p>
            © {new Date().getFullYear()} Xiimba Attire Intelligence LLP. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Designed for modern textile manufacturing
          </p>

        </div>

      </div>
    </footer>
  );
}