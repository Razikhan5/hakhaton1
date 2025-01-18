"use client";

import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client'; // Import your Sanity client
import Image from 'next/image'; // Import the Image component

// Define the type for the category data fetched from Sanity
type Category = {
  title: string;
  imageUrl: string;
};

const Best: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    client
      .fetch<Category[]>(
        `*[_type == "categories"]{
          title,
          "imageUrl": image.asset->url
        }[0...3]` // Fetch only the first 3 categories
      )
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories!</div>;

  return (
    <div>
      <section className="body-font m-5">
        <div className="container px-5 mx-auto">
          <h2 className="text-4xl font-bold text-black text-left mb-6">
            Top Categories
          </h2>
          <div className="flex flex-wrap -m-4">
            {categories.map((category, index) => (
              <div key={index} className="lg:w-1/3 md:w-1/2 w-full p-4">
                <div className="block relative h-72 rounded overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    className="object-cover object-center w-full h-full block"
                    width={500} // Set appropriate width
                    height={300} // Set appropriate height
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Best;