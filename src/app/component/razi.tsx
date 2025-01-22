import React from 'react';
import Image from 'next/image'; // Import the Image component

const Collection = [
  {
    id: 1,
    image: "/grid1.png",
    alt: 'Dress',
    label: 'Explore New and Popular Styles',
  },
  {
    id: 2,
    image: '/best4.png',
    alt: 'Mens Fashion',
    badge: 'New',
  },
  {
    id: 3,
    image: "/grid3.png",
    alt: 'Mens Fashion',
  },
  {
    id: 4,
    image: "/grid4.png",
    alt: 'Belts',
  },
  {
    id: 5,
    image: "/grid5.png",
    alt: 'Sweater Collection',
  },
];

function Razi() {
  return (
    <section className="p-4  flex justify-center m-5  mt-24">
      <div className="w-full max-w-[1700px]">
        {/* Title for the section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Large image on the left */}
          <div className="relative col-span-1 h-[660px]">
            <Image
              src={Collection[0].image}
              alt={Collection[0].alt}
              className="w-full h-full object-cover"
              width={800} // Set the width of the image
              height={660} // Set the height of the image
            />
            <div className="absolute bottom-5 left-5 bg-white bg-opacity-80 px-4 py-2">
              <h3 className="text-3xl font-extrabold">{Collection[0].label}</h3>
            </div>
          </div>

          {/* Smaller images on the right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Collection.slice(1).map((item) => (
              <div key={item.id} className="relative h-[325px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  width={400} // Set the width of the image
                  height={325} // Set the height of the image
                />
                {item.badge && (
                  <div className="absolute top-2 right-2 px-3 py-1 text-sm font-semibold bg-red-500 text-white">
                    {item.badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Razi;