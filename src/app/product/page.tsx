"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client"; // Import your Sanity client
import Link from "next/link";
import Image from "next/image"; // Import the Image component

// Define the type for the product data fetched from Sanity
type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
};

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    client
      .fetch<Product[]>(
        `*[_type == "products"]{
          _id,
          title,
          price,
          "imageUrl": image.asset->url
        }[0...12]`
      )
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products!</div>;

  return (
    <div>
      {/* Product Section */}
      <section className="body-font bg-white mt-16">
        <div className="container px-5 mx-auto">
          <h2 className="text-4xl font-bold text-black mb-8">All Products</h2>
          <div className="flex flex-wrap -m-4">
            {/* Product Cards */}
            {products.map((product) => (
              <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  href={`/products/${product._id}`}
                  className="block relative h-64 rounded overflow-hidden"
                >
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.imageUrl}
                    width={300} // Set the width of the image
                    height={256} // Set the height of the image
                  />
                </Link>
                <div className="mt-4">
                  <h2 className="text-lg font-medium text-[#007580]">
                    {product.title}
                  </h2>
                  <p className="mt-1 text-gray-800">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter and Instagram Section */}
      <div className="bg-gray-200 py-10 px-4 mt-20">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Or Subscribe To The Newsletter
          </h2>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Email Address..."
              className="flex-1 p-3 text-gray-700 focus:outline-none"
            />
            <button className="bg-gray-800 text-white px-6 py-3 hover:bg-gray-900">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {products.slice(0, 6).map((product) => (
              <div key={product._id} className="relative">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  width={200} // Set the width of the image
                  height={200} // Set the height of the image
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;