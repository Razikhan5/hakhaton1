import { client } from '../../../sanity/lib/client';
import Image from 'next/image';

// Define the type for the product data fetched from Sanity
type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id;

  const product = await client.fetch<Product>(
    `*[_type == "products" && _id == $id][0]{
      _id,
      title,
      price,
      "imageUrl": image.asset->url,
      description
    }`,
    { id }
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <section className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 lg:h-auto">
              <Image
                src={product.imageUrl}
                alt={product.title}
                className="object-cover rounded-lg shadow-md"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-2xl text-[#007580] font-semibold mb-6">
                ${product.price}
              </p>
              <p className="text-gray-700 text-lg mb-8">
                {product.description}
              </p>

              {/* Add to Cart Button */}
              <button className="bg-[#007580] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#005f6b] transition duration-300">
                Add to Cart
              </button>

              {/* Additional Information */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Availability:</span>
                  <span className="text-green-600 font-semibold">
                    In Stock
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Category:</span>
                  <span className="text-gray-900 font-semibold">
                    Furniture
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Rating:</span>
                  <span className="text-yellow-500 font-semibold">★★★★☆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}