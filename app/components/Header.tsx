import { useState } from "react";
import { Link } from "@remix-run/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-300 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/about"
            className="text-gray-700 hover:text-gray-900 font-mono"
          >
            About
          </Link>
          <Link
            to="/shop"
            className="text-gray-700 hover:text-gray-900 font-mono"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-gray-900 font-mono"
          >
            Contact
          </Link>
        </nav>
        <h1 className="text-3xl tracking-wider font-mono underline">
          <Link to="/" className="text-gray-900">
            VASO
          </Link>
        </h1>
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/search"
            className="text-gray-700 hover:text-gray-900 font-mono"
          >
            Search
          </Link>
          <Link
            to="/account"
            className="text-gray-700 hover:text-gray-900 font-mono"
          >
            Account
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-gray-900 font-mono"
          >
            Cart(0)
          </Link>
        </nav>
        <button
          className="md:hidden text-gray-700 hover:text-gray-900 font-mono"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-200 px-6 py-4">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 font-mono"
            >
              About
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-gray-900 font-mono"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900 font-mono"
            >
              Contact
            </Link>
            <Link
              to="/search"
              className="text-gray-700 hover:text-gray-900 font-mono"
            >
              Search
            </Link>
            <Link
              to="/account"
              className="text-gray-700 hover:text-gray-900 font-mono"
            >
              Account
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-gray-900 font-mono"
            >
              Cart(0)
            </Link>
          </nav>
        </div>
      )}
      <div className="container px-6  m-20 text-center">
        <h2 className="text-5xl font-mono">BLOG</h2>
        <div className="text-gray-700">
          <span className="text-sm uppercase">Home ＞ Blog </span>
        </div>
      </div>
    </header>
  );
}
