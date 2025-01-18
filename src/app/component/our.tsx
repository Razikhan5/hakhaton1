"use client";

import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client'; // Import your Sanity client
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

// Define the type for the product data fetched from Sanity
type Product = {
  _id: string; // Add _id to the type
  title: string;
  price: number;
  imageUrl: string;
};

const Our: React.FC = () => {
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
        }[4...12]` // Fetch products from index 4 to 12
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
          <h2 className="flex justify-center items-center font-bold text-4xl text-black m-4 p-3">
            Our Collection
          </h2>
          <div className="flex flex-wrap -m-4">
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

export default Our;