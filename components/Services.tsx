export default function Services() {
  const services = [
    {
      title: "House Planning",
      desc: "Custom floor plans designed to match your lifestyle & vastu compliance.",
      icon: "🏠",
    },
    {
      title: "3D Elevation",
      desc: "Modern & realistic 3D designs that bring your dream home to life.",
      icon: "🎨",
    },
    {
      title: "Vastu Consultation",
      desc: "Expert vastu advice to ensure positive energy & prosperity at home.",
      icon: "🧭",
    },
    {
      title: "Construction Support",
      desc: "End-to-end guidance during construction for quality assurance.",
      icon: "🛠️",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="mt-4 text-lg opacity-80">
          We provide complete home planning & design solutions in Bihar.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border bg-white dark:bg-black shadow hover:shadow-lg transition"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm opacity-80">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
