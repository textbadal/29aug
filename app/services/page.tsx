"use client";

import { Home, Layers, Compass, HardHat } from "lucide-react"; // service icons
import Link from "next/link";
import Script from "next/script"; // ✅ Fix: Import Script

export default function ServicesPage() {
  const services = [
    {
      title: "House Planning",
      price: "Starting from ₹999",
      description: "Custom floor plans tailored to your needs & vastu compliance.",
      icon: Home,
      features: [
        "2D Floor Plans",
        "Vastu-Compliant Layout",
        "Multiple Revisions",
        "Delivered in PDF & CAD",
      ],
    },
    {
      title: "3D Elevation Design",
      price: "₹4,999 onwards",
      description: "Modern 3D front elevation that brings your dream home to life.",
      icon: Layers,
      features: [
        "Photorealistic Renders",
        "Front & Side Views",
        "Material Suggestions",
        "Exterior Color Schemes",
      ],
    },
    {
      title: "Vastu Consultation",
      price: "₹1,499",
      description: "Expert vastu advice for home & office planning, available online/offline.",
      icon: Compass,
      features: [
        "Plot Analysis",
        "Detailed Report",
        "Online Session (30 min)",
        "Remedial Suggestions",
      ],
    },
    {
      title: "Site Supervision",
      price: "₹15,000 / month",
      description: "On-site construction supervision ensuring quality & timely execution.",
      icon: HardHat,
      features: [
        "Weekly Site Visits",
        "Quality Checks",
        "Contractor Coordination",
        "Progress Reports",
      ],
    },
  ];

  return (
    <>
      {/* ✅ SEO Structured Data */}
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dream Homes Bihar",
            url: "https://dreamhomesbihar.online/services",
            logo: "https://dreamhomesbihar.online/logo.png",
            telephone: "+916205820278",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Patna",
              addressLocality: "Patna",
              addressRegion: "Bihar",
              postalCode: "800001",
              addressCountry: "IN",
            },
            serviceType: [
              "House Planning",
              "Vastu-Compliant Designs",
              "3D Elevations",
              "Interior Design",
              "Commercial Building Design",
            ],
          }),
        }}
      />

      {/* ✅ Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
            <p className="mt-3 text-lg text-gray-600">
              Affordable, professional, and vastu-compliant solutions for your dream home.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col"
              >
                <div className="flex items-center gap-3">
                  <service.icon className="w-8 h-8 text-yellow-500" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-yellow-600 font-bold mt-2">{service.price}</p>
                <p className="text-gray-500 text-sm mt-3">{service.description}</p>

                <ul className="mt-4 text-sm text-gray-600 space-y-2 flex-1">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      ✅ <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-6 inline-block text-center px-5 py-2 rounded-lg bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
