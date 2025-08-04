"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const MobileMenuWrapper = ({
  navLinks,
  onClose,
}: {
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}) => {
  const pathname = usePathname();
  // Use a custom hook to handle hash state and changes
  const [hash, setHash] = React.useState(() =>
    typeof window !== "undefined" ? window.location.hash : ""
  );

  React.useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", handleHashChange);
      // Cleanup listener on unmount
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []);

  return (
    <div className="fixed top-16 left-0 bg-white w-full shadow-md md:hidden p-4">
      <nav className="flex flex-col items-center justify-center h-full space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "w-full text-start text-gray-800 hover:text-blue-600 text-base font-medium p-3 rounded-sm hover:bg-gray-200",
              hash === link.href && "bg-gray-100",
              pathname === link.href && "bg-gray-100"
            )}
            onClick={() => onClose()}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenuWrapper;
