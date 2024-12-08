import React from 'react';

const Collection = [
  {
    id: 1,
    image: 'https://s3-alpha-sig.figma.com/img/e222/3ac4/9ef838bf1b2e6eb27237306ca911c590?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HfdAY91YKuQbFJRCfKgNlwT2SIRldJR5H1d~-hdFNFnaxV6ewgqe66L~82nVicBVEXZp9i1qXPUs~DKG4~npBhDEgtrR0UCTVIA8N9uUvjjRTuLEs9oJleKJxQCKBdS6yKe76VYEDtEaX74gSQAI2P2qox0ojQQrUUsJDtOPYFc8j8zX--2TYKJAOuAbjsOOVEdRAA9OWETbkE4hOBd9xFjlrcYm2HxrpN1GFzpsaIxRf2g0tkAAjJXG8H45qPKmUoKNFqAkquMgvzyBg57gWWPmTKk82uaN58hKB~Hj1lq7CgaPJUaPtW9s1ErylbrbhZlTxFabVYT19CoabLWelQ__',
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
    image: 'https://s3-alpha-sig.figma.com/img/b120/dd35/afa230d9c7854e8904bff707a459d920?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWR4VzL7B8Lq3Cj8UsC6O1v7V0GOyadN1IVOEpf4Tp-eq7YaU3riFDEfoxBstyAnPqpwccxuOVjGF4C6db995i0GkypraS6Vemy4dMkcvnEDg7dLvXXZBM2Eq9LcM3wMAxpsfQ7ZWQh~7rgCHhMblB6H5bCSOF-TVBBdM-Mc6IzzJLR7dSrzCfCK85iZ4w9pQyegtV-G9FxCUKSwOzrNLtPt2ARGoJ~1-9dxnfGu-GOnXzGX5DnrBzyRxuUv~kxr6SoLWYWwtTJwkIGtNTExhvUggG5cFUQBzCadyehabrVu~1LJHINaHaRU~ZSFreYIVyhic6JgZh9nGCyB2MXJXw__',
    alt: 'Mens Fashion',
  },
  {
    id: 4,
    image: 'https://s3-alpha-sig.figma.com/img/a507/8479/3410e47eab61c559fa971045f11bb3a9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JEMMAvmnE2Kx5Mk5j5fC2RDwKgf3TBs90F1AfuAgaE8JK59wYrhVN4XBuQ3Ot9CtuV3PMopPHxZ2tY1lM3-awAen77BlFGPu4bsxZh7xPz7GHHNIgsI0hrZqSSsAmwUHSIow4gp6Gv7GlIbVSPrzXiSZrZwK7biLAHCGpyQM9XEDo9dvYEpsiINohCrL2MTpL3SmUjEAOcdaoq7ZQ1NbmRy~F2AhlqrQdoHMnrjDnMarKGLunclCsBeEw3DyoQ3Daspps2~tjxS2ZQk7Wf0UbIoveZah3~H8guCywEWKphXNRSEQNhrZiYyzzlkhJWW2WGAqVNT8wFcWghNoXhM5yg__',
    alt: 'Belts',
  },
  {
    id: 5,
    image: 'https://s3-alpha-sig.figma.com/img/b120/dd35/afa230d9c7854e8904bff707a459d920?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWR4VzL7B8Lq3Cj8UsC6O1v7V0GOyadN1IVOEpf4Tp-eq7YaU3riFDEfoxBstyAnPqpwccxuOVjGF4C6db995i0GkypraS6Vemy4dMkcvnEDg7dLvXXZBM2Eq9LcM3wMAxpsfQ7ZWQh~7rgCHhMblB6H5bCSOF-TVBBdM-Mc6IzzJLR7dSrzCfCK85iZ4w9pQyegtV-G9FxCUKSwOzrNLtPt2ARGoJ~1-9dxnfGu-GOnXzGX5DnrBzyRxuUv~kxr6SoLWYWwtTJwkIGtNTExhvUggG5cFUQBzCadyehabrVu~1LJHINaHaRU~ZSFreYIVyhic6JgZh9nGCyB2MXJXw__',
    alt: 'Sweater Collection',
  },
];

function Razi() {
  return (
    <section className="p-4 mt-4 flex justify-center m-5">
      <div className="w-full max-w-[1700px]">
        {/* Title for the section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Large image on the left */}
          <div className="relative col-span-1 h-[660px]">
            <img
              src={Collection[0].image}
              alt={Collection[0].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-white bg-opacity-80 px-4 py-2">
              <h3 className="text-3xl font-extrabold">{Collection[0].label}</h3>
            </div>
          </div>

          {/* Smaller images on the right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Collection.slice(1).map((item) => (
              <div key={item.id} className="relative h-[325px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
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
