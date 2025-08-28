"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function GalleryPage() {
  const projects = [
    { src: "/images/gallery1.jpg", title: "Modern Duplex" },
    { src: "/images/gallery2.jpg", title: "Traditional Vastu House" },
    { src: "/images/gallery3.jpg", title: "3D Front Elevation" },
    { src: "/images/gallery4.jpg", title: "Interior Design" },
    { src: "/images/gallery5.jpg", title: "Bungalow Plan" },
    { src: "/images/gallery6.jpg", title: "Commercial Building" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">Our Work</h1>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
        A showcase of designs & projects we’ve successfully completed for our clients.
      </p>

      {/* Desktop Grid */}
      <div className="hidden md:grid mt-12 grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden border shadow hover:shadow-lg transition"
          >
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-3 text-sm font-medium">{project.title}</div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="mt-12 md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-xl overflow-hidden border shadow hover:shadow-lg transition">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 text-sm font-medium">{project.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
