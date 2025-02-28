import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-20 md:flex-nowrap md:space-x-4 mt-10">
      <Image src="/z.png" alt="icon" width={100} height={100} />
      <Image src="/p.png" alt="icon" width={100} height={100} />
      <Image src="/c.png" alt="icon" width={100} height={100} />
      <Image src="/zb.png" alt="icon" width={100} height={100} />
      <Image src="/b.png" alt="icon" width={100} height={100} />
      <Image src="/po.png" alt="icon" width={100} height={100} />
    </div>
  );
};