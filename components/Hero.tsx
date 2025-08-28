export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Build Your <span className="text-blue-600">Dream Home</span> in Bihar
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Vastu-compliant house planning & modern elevation designs — fast, reliable, and affordable.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Get Free Consultation
        </a>
      </div>

      <div className="flex-1 mt-10 md:mt-0">
        {/* put an image named `home-design.png` into /public */}
        <img src="/home-design.png" alt="Dream Home" className="w-full rounded-2xl shadow-lg" />
      </div>
    </section>
  )
}
