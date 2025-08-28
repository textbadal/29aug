"use client";

import Image from "next/image";
import { useState } from "react";
import { FaDownload, FaShoppingCart } from "react-icons/fa";
import Script from "next/script";
import { toast } from "react-hot-toast"; // Optional: for notifications

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  downloadLink: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "10,000+ House Floor Plans Pack",
    price: "₹999",
    description: "Get access to a huge library of house plans in CAD & PDF format.",
    image: "/images/product1.jpg",
    downloadLink: "#",
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Vastu Shastra Guide (E-book)",
    price: "₹299",
    description: "A complete guide to designing vastu-compliant homes.",
    image: "/images/product2.jpg",
    downloadLink: "#",
    badge: "Popular",
  },
  {
    id: 3,
    title: "3D Front Elevation Designs",
    price: "₹499",
    description: "High-quality 3D elevation samples for modern homes.",
    image: "/images/product3.jpg",
    downloadLink: "#",
    badge: "New",
  },
  {
    id: 4,
    title: "Interior Design Inspirations Pack",
    price: "₹799",
    description: "Pre-designed interior layouts and mood boards for every room.",
    image: "/images/product4.jpg",
    downloadLink: "#",
    badge: "Trending",
  },
  {
    id: 5,
    title: "Modern Kitchen & Bathroom Plans",
    price: "₹599",
    description: "Ready-to-use kitchen and bathroom layouts for modern homes.",
    image: "/images/product5.jpg",
    downloadLink: "#",
    badge: "Popular",
  },
  {
    id: 6,
    title: "Landscape & Garden Design Guide",
    price: "₹399",
    description: "Step-by-step guide to designing beautiful outdoor spaces.",
    image: "/images/product6.jpg",
    downloadLink: "#",
    badge: "New",
  },
  {
    id: 7,
    title: "Complete Home Renovation Guide",
    price: "₹499",
    description: "All-in-one guide for renovating old homes efficiently.",
    image: "/images/product7.jpg",
    downloadLink: "#",
    badge: "Recommended",
  },
  {
    id: 8,
    title: "3D Rendering Tools & Templates",
    price: "₹899",
    description: "Editable 3D templates and tools for architects and designers.",
    image: "/images/product8.jpg",
    downloadLink: "#",
    badge: "Best Seller",
  },
  {
    id: 9,
    title: "Small Apartment Design Pack",
    price: "₹349",
    description: "Optimized floor plans for small and compact living spaces.",
    image: "/images/product9.jpg",
    downloadLink: "#",
    badge: "Popular",
  },
  {
    id: 10,
    title: "Eco-Friendly Home Guide",
    price: "₹299",
    description: "Tips and plans to design energy-efficient, sustainable homes.",
    image: "/images/product10.jpg",
    downloadLink: "#",
    badge: "New",
  },
];

export default function ProductsPage() {
  const [cart, setCart] = useState<number[]>([]);

  const toggleCart = (product: Product) => {
    if (cart.includes(product.id)) {
      setCart((prev) => prev.filter((id) => id !== product.id));
      toast.success(`You removed "${product.title}" from cart`);
    } else {
      setCart((prev) => [...prev, product.id]);
      toast.success(`Added "${product.title}" to cart`);
    }
  };

  return (
    <>
      {/* ✅ Structured Data for SEO */}
      <Script
        id="products-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: products.map((product, index) => ({
              "@type": "Product",
              position: index + 1,
              name: product.title,
              description: product.description,
              image: `https://dreamhomesbihar.online${product.image}`,
              brand: { "@type": "Brand", name: "Dream Homes Bihar" },
              offers: {
                "@type": "Offer",
                url: `https://dreamhomesbihar.online/products#${product.id}`,
                priceCurrency: "INR",
                price: product.price.replace("₹", ""),
                availability: "https://schema.org/InStock",
              },
            })),
          }),
        }}
      />

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">
              Digital Products
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Instantly download our premium plans, designs, and guides.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden relative flex flex-col"
              >
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow z-10">
                    {product.badge}
                  </span>
                )}

                {/* Product Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 flex-1">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-yellow-600">
                      {product.price}
                    </span>

                    {/* Add to Cart / Download */}
                    <button
                      onClick={() => toggleCart(product)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                        cart.includes(product.id)
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-yellow-500 hover:bg-yellow-400 text-black"
                      }`}
                    >
                      {cart.includes(product.id) ? (
                        <>
                          <FaDownload /> Download
                        </>
                      ) : (
                        <>
                          <FaShoppingCart /> Buy Now
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
