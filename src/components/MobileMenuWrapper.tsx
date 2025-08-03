"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link, Menu } from "lucide-react";

const MobileMenuWrapper = ({
  navLinks,
}: {
  navLinks: { name: string; href: string }[];
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full h-full fixed top-0 left-0 m-0 rounded-none">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-blue-600 text-3xl font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MobileMenuWrapper;
