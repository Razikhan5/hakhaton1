"use client";

import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';

// Define the type for the product data fetched from Sanity
type Product = {
  _id: string; // Add _id to the type
  title: string;
  price: number;
  imageUrl: string;
  description: string;
};

const Feature = () => { // Remove FeatureProps
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
          "imageUrl": image.asset->url,
          description
        }[0...4]` // Fetch only the first 4 products
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
      <section className="body-font m-5">
        <div className="container px-5 mx-auto">
          <h2 className="text-3xl font-bold text-black mb-6 text-left mt-10">
           Feature Products
          </h2>
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product._id} className="lg:w-1/4 md:w-1/2 w-full p-4">
                <Link
                  href={`/products/${product._id}`}
                  className="block relative h-64 rounded overflow-hidden"
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    className="object-cover object-center w-full h-full block"
                    width={500} // Set appropriate width
                    height={300} // Set appropriate height
                  />
                </Link>
                <div className="mt-4">
                  <h2 className="text-[#007580] title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1 text-gray-800">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;