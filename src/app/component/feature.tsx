import React from 'react';

function Feature() {
  return (
    <div>
      <section className="body-font m-5">
        <div className="container px-5 mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-6">
            Best Seller
          </h2>
          <div className="flex flex-wrap -m-4">
            {/* First product card */}
            <div className="lg:w-1/4 md:w-1/2 w-full p-4">
              <a className="block relative h-64 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/best1.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-[#007580] title-font text-lg font-medium">
                  Library Stool Chair
                </h2>
                <p className="mt-1 text-gray-800">$20</p>
              </div>
            </div>

            {/* Second product card */}
            <div className="lg:w-1/4 md:w-1/2 w-full p-4">
              <a className="block relative h-64 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/best2.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-[#272343] title-font text-lg font-medium">
                  Library Stool Chair
                </h2>
                <p className="mt-1 text-gray-800">$20</p>
              </div>
            </div>

            {/* Third product card */}
            <div className="lg:w-1/4 md:w-1/2 w-full p-4">
              <a className="block relative h-64 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/best3.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-[#272343] title-font text-lg font-medium">
                  Library Stool Chair
                </h2>
                <p className="mt-1 text-gray-800">$220</p>
              </div>
            </div>

            {/* Fourth product card */}
            <div className="lg:w-1/4 md:w-1/2 w-full p-4">
              <a className="block relative h-64 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/best4.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-[#272343] title-font text-lg font-medium">
                  Library Stool Chair
                </h2>
                <p className="mt-1 text-gray-800">$20</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
