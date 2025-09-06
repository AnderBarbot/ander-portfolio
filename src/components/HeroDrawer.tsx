'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroDrawer = () => {
  const pathname = usePathname();
  const [isAbout, setIsAbout] = useState(false);

  useEffect(() => {
    setIsAbout(pathname === '/about');
  }, [pathname]);

  return (
    <div className="group fixed top-0 left-0 h-screen z-50">
      {/* Drawer Panel */}
      <div
        className={`
          h-full w-80 bg-base-200 shadow-lg p-6 transition-transform duration-300 ease-in-out
          ${isAbout ? 'translate-x-0' : '-translate-x-60 group-hover:translate-x-0'}
        `}
      >
        <div className="flex flex-col items-center text-center">
          <Image
            src="/profile1.jpg"
            alt="Ander Barbot"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">Ander Barbot</h2>
          <p className="text-sm text-gray-500 mb-4">Boise, ID</p>

          <div className="text-sm w-full space-y-2">
            <p>📞 208-230-2102</p>
            <p>📧 anderbarbot@gmail.com</p>
            <Link href="mailto:anderbarbot@gmail.com" className="btn btn-sm btn-primary w-full">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Invisible Hover Zone */}
      {!isAbout && (
        <div className="absolute top-0 left-0 h-full w-4 bg-transparent group-hover:bg-transparent" />
      )}
    </div>
  );
};

export default HeroDrawer;
