"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image"
import Logo from "@/assets/images/pep.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="w-[100px]">
              <Link href="/" className="text-2xl font-bold">
                              <Image src={Logo} alt="" w={20} h={20} />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                href="/about_us"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Gallery
              </Link>
              <Link
                href="/faq"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                FAQ
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="/about_us"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Gallery
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
