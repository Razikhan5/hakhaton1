import React from 'react';

function Best() {
  return (
    <div>
      <section className="body-font m-5">
        <div className="container px-5 mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-6">
            Top Categories
          </h2>
          <div className="flex flex-wrap -m-4">
            {/* First card */}
            <div className="lg:w-1/3 md:w-1/2 w-full p-4">
              <a className="block relative h-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/bst1.png"
                />
              </a>
            </div>

            {/* Second card */}
            <div className="lg:w-1/3 md:w-1/2 w-full p-4">
              <a className="block relative h-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/bst2.png"
                />
              </a>
            </div>

            {/* Third card */}
            <div className="lg:w-1/3 md:w-1/2 w-full p-4">
              <a className="block relative h-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/bst3.png"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Best;
