import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          RecycleMarketplace
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-green-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/marketplace" className="text-white hover:text-green-200">
              Marketplace
            </Link>
          </li>
          <li>
            <Link href="/scrap-collection" className="text-white hover:text-green-200">
              Sell Scrap
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}