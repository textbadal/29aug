"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Dream Homes Bihar</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            We design vastu-compliant homes, modern interiors, and 
            architectural plans tailored to your dreams. Bringing 
            luxury and tradition together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/services" className="hover:text-yellow-300 transition">Services</a></li>
            <li><a href="/gallery" className="hover:text-yellow-300 transition">Gallery</a></li>
            <li><a href="/testimonials" className="hover:text-yellow-300 transition">Testimonials</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li>🏠 House Planning</li>
            <li>📐 Vastu Consultancy</li>
            <li>🎨 3D Elevation Design</li>
            <li>🛋 Interior Designing</li>
            <li>🏢 Commercial Projects</li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Stay Connected</h3>
          
          {/* Contact */}
          <ul className="space-y-3 text-sm mb-6">
            <li>📍 Patna, Bihar</li>
            <li>📞 <a href="tel:+916205820278" className="hover:text-yellow-300">+91 62058 20278</a></li>
            <li>📧 <a href="mailto:dreamhomesbihar@gmail.com" className="hover:text-yellow-300">dreamhomesbihar@gmail.com</a></li>
          </ul>

          {/* Newsletter */}
          <form className="flex mb-6">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-lg bg-gray-900 border border-gray-700 text-sm text-white focus:outline-none focus:border-yellow-400"
            />
            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-r-lg text-sm font-semibold transition">
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:scale-110 transition" aria-label="Facebook">
              <FaFacebookF className="text-blue-500" />
            </a>
            <a href="#" className="hover:scale-110 transition" aria-label="Instagram">
              <FaInstagram className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text" />
            </a>
            <a href="#" className="hover:scale-110 transition" aria-label="Twitter">
              <FaTwitter className="text-sky-400" />
            </a>
            <a href="#" className="hover:scale-110 transition" aria-label="YouTube">
              <FaYoutube className="text-red-500" />
            </a>
            <a href="https://wa.me/916205820278" target="_blank" className="hover:scale-110 transition" aria-label="WhatsApp">
              <FaWhatsapp className="text-green-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Dream Homes Bihar</span>. 
        All rights reserved.
      </div>
    </footer>
  );
}
