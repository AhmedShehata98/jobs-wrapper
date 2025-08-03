import React from "react";
import MobileMenuWrapper from "../MobileMenuWrapper";
import Link from "next/link";

function Header() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Sources", href: "#sources" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="#" className="text-2xl font-bold text-gray-900">
          jobs wrapper
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <MobileMenuWrapper navLinks={navLinks} />
      </div>
    </header>
  );
}

export default Header;
