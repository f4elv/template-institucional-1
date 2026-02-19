"use client";

import { siteConfig } from "../../config/site";
import { Reveal } from "../Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-stone-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl font-bold">Our Products</h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-stone-700 mt-4 max-w-2xl mx-auto">
              Discover our range of high-quality products designed to meet your
              needs and exceed your expectations.
            </p>
          </Reveal>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.2}>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

                <p className="text-stone-700 mb-4 grow">
                  {service.description}
                </p>

                <span className="text-lg font-bold text-secondary">
                  {service.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
