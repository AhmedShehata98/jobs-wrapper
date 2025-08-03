import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Sources", href: "#sources" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <nav className="flex flex-wrap justify-center space-x-6 mb-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Social Media Icons - Optional */}
        {/* <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-6 w-6" /></a>
          </div> */}
        <p className="text-gray-500 text-sm">
          © Jobs Wrapper, 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
