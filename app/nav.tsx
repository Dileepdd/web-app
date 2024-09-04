"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = () => {
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  return (
    <div className="flex items-center justify-between p-5 text-white">
      <div className="text-2xl font-bold cursor-pointer">
        <Link href="/">Logo</Link>
      </div>
      <div className='mr-20'>
        <ul className="flex space-x-8">
          {['/', '/gallery', '/about', '/contact', '/resume'].map((route) => (
            <li key={route} className="relative">
              <Link 
                href={route} 
                className={`relative cursor-pointer ${isActive(route) ? 'text-customGreen' : 'text-white'}`}
              >
                <span className='mb-5'>{route.slice(1).toUpperCase() || 'HOME'}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
