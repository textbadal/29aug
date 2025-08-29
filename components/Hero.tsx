export default function HeroAlternateNoFramer() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-10">
      
      {/* Left Image */}
      <div className="flex-1 relative">
        <img 
          src="/home-design.png" 
          alt="Dream Home" 
          className="w-full rounded-3xl shadow-xl border border-gray-100 transform transition-transform duration-500 hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full opacity-50 filter blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-pink-200 to-red-200 rounded-full opacity-40 filter blur-2xl"></div>
      </div>

      {/* Right Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 transition duration-700">
          Design Your <span className="text-blue-600">Perfect Home</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700 transition-opacity duration-700">
          Expert Vastu-compliant house plans & modern elevations, tailored to your budget and lifestyle.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
          >
            Free Consultation
          </a>
          <a
            href="#services"
            className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            Explore Services
          </a>
        </div>

        {/* Mini feature badges */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
          {["Vastu-Compliant", "Modern Design", "Fast Delivery", "Affordable"].map((feature, idx) => (
            <span key={idx} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium text-sm shadow-sm transition-transform duration-300 hover:scale-105">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
