"use client";

import React, { useState } from "react";
import MobileMenuWrapper from "../MobileMenuWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Features", href: "#features" },
    { name: "Sources", href: "#sources" },
    { name: "Contact", href: "#contact" },
    { name: "Jobs", href: "/jobs" },
  ];
  return (
    <header className="h-(--header-height) bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="relative container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/#"
          className="text-lg lg:text-2xl font-bold uppercase text-brand"
        >
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
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen((p) => !p)}
          className="lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
        {isMobileMenuOpen && (
          <MobileMenuWrapper
            navLinks={navLinks}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
