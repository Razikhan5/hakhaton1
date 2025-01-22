"use client";

import { useCart } from '../../component/contextApi'; // Adjust the import path as needed
import { client } from '../../../sanity/lib/client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation'; // Import useParams

// Define the Product type
type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  inventory: boolean;
  stock?: number; // Optional field
};

export default function ProductPage() {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams(); // Use useParams to access dynamic route parameters

  // Extract the `id` parameter from the URL
  const { id } = params as { id: string }; // Type assertion for `id`

  useEffect(() => {
    if (!id) return; // Ensure `id` is available

    const fetchProduct = async () => {
      try {
        const fetchedProduct = await client.fetch<Product>(
          `*[_type == "product" && _id == $id][0]{
            _id,
            title,
            price,
            "imageUrl": image.asset->url,
            description,
            inventory,
            stock
          }`,
          { id }
        );

        if (!fetchedProduct) {
          setError('Product not found');
        } else {
          setProduct(fetchedProduct);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-12">{error}</div>;
  }

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.title,
      description: product.description,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
      inStock: product.inventory,
    });

    // Show a success toast
    toast.success(`${product.title} added to cart!`);
  };

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
                priority // Optimize loading for above-the-fold images
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
              <button
                onClick={handleAddToCart}
                className="bg-[#007580] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#005f6b] transition duration-300"
                disabled={!product.inventory} // Disable button if product is out of stock
              >
                {product.inventory ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Availability:</span>
                  <span className="text-green-600 font-semibold">
                    {product.inventory ? 'In Stock' : 'Out of Stock'}
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