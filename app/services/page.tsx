"use client";

import { Home, Layers, Compass, HardHat } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "House Planning",
      price: "Starting from ₹999 per plan",
      description:
        "Custom 2D & 3D floor plans tailored to your requirements with vastu compliance.",
      icon: Home,
      popular: true,
      features: [
        "2D Floor Plans & Layouts",
        "Vastu-Compliant Design",
        "Multiple Revisions",
        "PDF & CAD Delivery",
        "Room Dimension Suggestions",
        "Furniture Layout Guidance",
      ],
    },
    {
      title: "3D Elevation Design",
      price: "₹4,999 – ₹14,999 per elevation",
      description:
        "Modern and photorealistic 3D elevations for your home’s front & side views.",
      icon: Layers,
      popular: false,
      features: [
        "Photorealistic 3D Renders",
        "Front & Side Elevation Views",
        "Material & Texture Recommendations",
        "Color Palette & Exterior Schemes",
        "Balcony & Terrace Design Options",
      ],
    },
    {
      title: "Vastu Consultation",
      price: "₹1,499 – ₹4,999 depending on plot size",
      description:
        "Expert vastu guidance for home or office layouts, available online or on-site.",
      icon: Compass,
      popular: false,
      features: [
        "Plot Analysis & Orientation",
        "Detailed Vastu Report",
        "Online/On-Site Consultation (30-60 min)",
        "Remedial & Correction Suggestions",
        "Room-wise Energy Alignment",
      ],
    },
    {
      title: "Site Supervision",
      price: "₹15,000 – ₹25,000 / month",
      description:
        "On-site supervision to ensure construction quality, schedule adherence, and contractor coordination.",
      icon: HardHat,
      popular: false,
      features: [
        "Weekly Site Visits & Progress Reports",
        "Quality Checks of Materials & Workmanship",
        "Contractor Coordination & Issue Resolution",
        "Budget & Timeline Monitoring",
        "Safety & Compliance Checks",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose from our expert services to plan, design, and supervise your dream home.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col bg-white dark:bg-gray-800 ${
                service.popular ? "border-2 border-yellow-500" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <service.icon className="w-8 h-8 text-yellow-500" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                {service.popular && (
                  <span className="ml-auto bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              <p className="text-yellow-600 font-bold">{service.price}</p>
              <p className="text-gray-500 dark:text-gray-300 mt-2">{service.description}</p>

              <details className="mt-4">
                <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-300">
                  Features
                </summary>
                <ul className="mt-2 text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside">
                  {service.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </details>

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
  );
}
