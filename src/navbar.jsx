import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "home" },
    { label: "Input Data", href: "input-data" },
    { label: "History / Edit", href: "history-edit" },
    { label: "Balance", href: "balance" },
    { label: "Category", href: "category" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-green-500 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="assets/farrel.png"
            className="h-8"
            alt="Farrel Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Personal Finance
          </span>
        </a>

        {/* Burger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Responsive Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-500 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green-500">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={`#${item.href}`}
                  onClick={() => handleLinkClick(item.href)}
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeLink === item.href
                    ? isMenuOpen
                      ? "bg-green-700 text-white md:text-blue-700"
                      : "text-white md:text-blue-700"
                    : "text-white hover:bg-green-600 md:hover:bg-transparent md:hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
