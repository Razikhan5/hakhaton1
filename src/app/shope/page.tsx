"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client"; // Import your Sanity client
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

// Define the type for the product data fetched from Sanity
type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
};

export default function ProductPage() {
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
    <div className="px-4 sm:px-8 md:px-52 py-8 mt-28">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 pl-4 text-center">
          Our Product
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Link href={`/products/${product._id}`} className="w-full">
                <div className="w-full h-64 overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="flex justify-between w-full px-4 py-2">
                <div className="flex flex-col items-start">
                  <h2 className="font-medium text-lg mb-1">{product.title}</h2>
                  <span className="text-black text-lg font-bold">
                    ${product.price}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}