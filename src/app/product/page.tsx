import React from "react";

function Product() {
  return (
    <div>
      {/* Product Section */}
      <section className="body-font bg-white mt-8">
        <div className="container px-5 mx-auto">
          <h2 className="text-4xl font-bold text-black mb-8">All Products</h2>
          <div className="flex flex-wrap -m-4">
            {/* Product Card */}
            {[
              { id: 1, name: "Library Stool Chair", price: "$20", src: "/best1.png" },
              { id: 2, name: "Library Stool Chair", price: "$20", src: "/best2.png" },
              { id: 3, name: "Library Stool Chair", price: "$220", src: "/best3.png" },
              { id: 4, name: "Library Stool Chair", price: "$20", src: "/best4.png" },
              { id: 5, name: "Modern Chair", price: "$30", src: "/bst1.png" },
              { id: 6, name: "Office Desk Chair", price: "$20", src: "/bst2.png" },
              { id: 7, name: "Wooden Stool", price: "$20", src: "/bst3.png" },
              { id: 8, name: "Garden Bench", price: "$20", src: "/best1.png" },
              { id: 9, name: "Product 9", price: "$50", src: "/best2.png" },
              { id: 10, name: "Product 10", price: "$60", src: "/best3.png" },
              { id: 11, name: "Product 11", price: "$70", src: "/bst1.png" },
              { id: 12, name: "Product 12", price: "$80", src: "/bst2.png" },
            ].map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-64 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.src}
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-lg font-medium text-[#007580]">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-gray-800">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter and Instagram Section */}
      <div className="bg-gray-50 py-10 px-4">
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
            {["/best1.png", "/best2.png", "/best3.png", "/bst1.png", "/bst2.png", "/bst3.png"].map(
              (src, index) => (
                <div key={index} className="relative">
                  <img
                    src={src}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
