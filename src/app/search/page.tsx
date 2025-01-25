"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaSpinner, FaRegFrown, FaRegMeh, FaRegQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";

interface Product {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
}

const SearchResultsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [productListResults, setProductListResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Get the search query from the URL
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("q");
    if (query) {
      setSearchQuery(query);
      fetchSearchResults(query);
    }
  }, []);

  // Fetch search results from Sanity
  const fetchSearchResults = async (query: string) => {
    setIsLoading(true);
    try {
      // Fetch productList results
      const productListData: Product[] = await client.fetch(
        `*[_type == "products" && name match $searchQuery] {
          _id,
          title,
          "imageUrl": image.asset->url,
          price,
        }`,
        { searchQuery: `*${query}*` }
      );

      setProductListResults(productListData);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-[#FAFAFA] min-h-screen">
        <div className="container mx-auto p-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2"
          >
            <FaSearch className="text-gray-700" /> Search Results for &quot;{searchQuery}&quot;
          </motion.h1>
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center h-64"
            >
              <FaSpinner className="animate-spin text-4xl text-gray-700" />
            </motion.div>
          ) : productListResults.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6">Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productListResults.map((product, index) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/products/${product._id || '#'}`}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 block"
                    >
                      <div className="p-4">
                        <Image
                          src={product.imageUrl || '/default-image.png'}
                          alt={product.title}
                          width={300}
                          height={300}
                          className="w-full h-72 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold mt-4 text-gray-800">
                          {product.title}
                        </h2>
                        <p className="text-lg font-medium text-gray-900 mt-2">
                          ${product.price}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64">
              <div className="icon-container flex gap-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaRegFrown className="text-4xl text-blue-500" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <FaRegMeh className="text-4xl text-yellow-500" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <FaRegQuestionCircle className="text-4xl text-red-500" />
                </motion.div>
              </div>
              <p className="mt-4 text-gray-700">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;