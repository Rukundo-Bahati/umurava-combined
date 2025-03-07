"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, type JSX } from "react";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const NavigateToJoin = () => {
    router.push("/join");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Challenge & Hackathons", href: "/challenges" },
    { name: "For Educational Institutions", href: "/institutions" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="flex py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* Logo */}
        <Link href="/" className="block">
          <div className="w-24 sm:w-42 md:w-36 lg:w-36 ml-0 sm:ml-20 flex justify-center">
            <Image src="/images/logo.png" alt="logo" width={144} height={144} />
          </div>
        </Link>

        {/* Join Button & Menu Toggle */}
        <div className="flex items-center space-x-4 ml-auto sm:ml-0">
          <button
            className="px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#041738] bg-[#041738] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
            onClick={NavigateToJoin}
          >
            Join the Program
          </button>

          {/* Menu Toggle */}
          <button
            className="lg:hidden text-2xl text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-2/3 h-full bg-white z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:static lg:w-auto lg:bg-transparent lg:translate-x-0`}
        >
          {/* Close Button */}
          <button
            className="lg:hidden absolute top-4 right-4 text-gray-700 text-2xl"
            onClick={closeMenu}
          >
            ✖
          </button>

          <ul className="flex flex-col lg:flex-row gap-5 p-6 lg:p-0">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative max-lg:border-b border-gray-300 py-3"
              >
                <Link
                  href={item.href}
                  className={`block font-light text-[15px] px-3 py-2 transition-all ${
                    pathname === item.href
                      ? "text-[#007bff] font-bold"
                      : "text-gray-500 hover:text-[#007bff]"
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007bff] transition-all duration-300 ease-in-out hover:w-full" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
