export default function Home() {
  return (
    <main className="px-6 py-10 space-y-16">

      {/* HERO SECTION */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Intelligent Textile Manufacturing
        </h1>
        <p className="text-gray-600">
          High-quality fabric solutions for global brands
        </p>
      </section>


      {/* ABOUT PREVIEW */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">About Xiimba</h2>
        <p className="text-gray-600">
          Xiimba Attire Intelligence LLP is a modern textile company based in
          Ichalkaranji, combining traditional craftsmanship with advanced
          manufacturing capabilities.
        </p>
      </section>


      {/* PRODUCTS PREVIEW */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Our Products</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Woven Fabrics</li>
          <li>Processed Fabrics</li>
          <li>Custom Fabric Development</li>
        </ul>
      </section>


      {/* CALL TO ACTION */}
      <section className="text-center space-y-4">
        <h2 className="text-xl font-semibold">
          Looking for a reliable textile partner?
        </h2>
        <button className="bg-black text-white px-6 py-2 rounded">
          Contact Us
        </button>
      </section>

    </main>
  );
}