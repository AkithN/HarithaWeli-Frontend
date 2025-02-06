import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600">About Us</h1>
        <p className="text-gray-600 mt-3">
          Pioneers in innovative design, creating a culture and lifestyle to change the lives of our clients by transforming spaces and moods.
        </p>
      </div>

      {/* Company Overview */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Who We Are</h2>
        <p className="mt-2 text-gray-700">
          Harithaweli is an eco-friendly plastering mortar mix with no river or sea sand added, making it suitable for both interior and exterior usage. It is a cement-based ready mix requiring only basic plastering skills and tools. Our product can be applied on brick, block, and concrete surfaces, ensuring a smooth finish with just a single coat application.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mt-10 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-center">Our Mission</h2>
        <p className="mt-2 text-gray-700 text-center">
          Striving to maintain the highest quality and value in products and services across Sri Lanka, focusing mainly on residential and commercial buildings.
        </p>
      </section>

      {/* Our Expertise */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-center">Our Expertise</h2>
        <p className="mt-2 text-gray-700">
          With unparalleled respect, knowledge, and honest service, we serve our customers by creating efficiently interconnected spaces and environments. Our team of architects and engineers is dedicated to delivering top-notch solutions tailored to our clients' needs.
        </p>
      </section>

      {/* Product Range */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-center">Our Product Range</h2>
        <div className="flex justify-center mt-6 gap-6 flex-wrap">
          {[
            { title: "Tile Adhesive", description: "Ensures durable and long-lasting tile installations." },
            { title: "Water Proofing", description: "Protects structures from water damage, enhancing longevity." },
            { title: "Brick Bond", description: "Provides strong adhesion for brickwork." },
            { title: "Wall Putty", description: "Smoothens walls for a flawless finish." },
            { title: "Clay Putty", description: "Offers a natural, eco-friendly wall finishing solution." },
            { title: "Tile Mortar", description: "Specialized mix for secure tile setting." },
            { title: "Ready Mix Plaster", description: "Convenient and efficient plastering solution." },
            { title: "Terrazzo Floor-Mix", description: "Creates beautiful and durable terrazzo flooring." },
          ].map((product, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg text-center w-60">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-700 mt-2">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="mt-10 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-center">Our Sustainable Focus</h2>
        <p className="mt-2 text-gray-700">
          At CEEDECS Lanka Holdings, we are committed to being responsible towards our community and the planet. Our aim is to offer products that are technologically advanced, modern, and reduce wastage, helping our customers save money while offering great value. We are taking small steps towards a big change by introducing eco-friendly products, thereby participating in the preservation of our ecosystem and planet.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="text-gray-700 mt-2">Email: info@harithaweli.lk | Phone: +94 710 500 800</p>
        <p className="text-gray-700 mt-2">Address: 132/1, Kandy Road, Mahara, Kadawatha, Sri Lanka</p>
      </section>
    </div>
  );
};

export default About;
