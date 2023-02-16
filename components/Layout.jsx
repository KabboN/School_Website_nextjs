import { useState } from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-sky-500 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-2xl">
            XYZ SCHOOL AND COLLEGE
          </Link>
          <div className="hidden md:block">
            <Link href="/" className="px-4 py-2 text-white hover:bg-sky-400 rounded">
              Home
            </Link>
            <Link href="/about" className="px-4 py-2 text-white hover:bg-sky-400 rounded">
              About
            </Link>
            <Link href="/academic" className="px-4 py-2 text-white hover:bg-sky-400 rounded">
              Academic
            </Link>
            <Link href="/notices" className="px-4 py-2 text-white hover:bg-sky-400 rounded">
              Notices
            </Link>
            <Link href="/gallery" className="px-4 py-2 text-white hover:bg-sky-400 rounded">
              Gallery
            </Link>
            <Link href="/contact" className="px-4 py-2 text-white hover:bg-sky-400 rounded">
              Contact Us
            </Link>
          </div>
          <button
            className="block md:hidden text-white hover:bg-sky-400 rounded px-4 py-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? 'Close' : 'Menu'}
          </button>
        </nav>
        {showMenu && (
          <nav className="md:hidden container mx-auto py-2">
            <ul>
              <li>
                <Link href="/" className="text-white block py-2 hover:bg-sky-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white block py-2 hover:bg-sky-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/academic" className="text-white block py-2 hover:bg-sky-400">
                  Academic
                </Link>
              </li>
              <li>
                <Link href="/notices" className="text-white block py-2 hover:bg-sky-400">
                  Notices
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white block py-2 hover:bg-sky-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white block py-2 hover:bg-sky-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      {children}
    </div>
  );
};

export default Layout;
