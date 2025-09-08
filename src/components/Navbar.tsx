"use client"; 
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "guestbook", label: "Guestbook" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!showNavbar && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [showNavbar, isMenuOpen]);


  
  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      setIsMenuOpen(false);

      let scrollTimeout: NodeJS.Timeout;
      const onScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          section.classList.add("pulse-simple");
          setTimeout(() => section.classList.remove("pulse-simple"), 600);
          window.removeEventListener("scroll", onScroll);
        }, 50);
      };
      window.addEventListener("scroll", onScroll);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
    >
      <div className="h-4 w-full" />
      <nav
        className={`transition-transform duration-300 bg-base-100 border-b border-base-300 shadow-md 
        ${showNavbar || isHovering ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className=" mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-lg font-bold"></div>
          <div className="hidden md:flex gap-4 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="btn btn-ghost btn-sm text-sm"
              >
                {item.label}
              </button>
            ))}
            <ThemeSwitcher />
          </div>

          {/* hamburger */}
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 btn btn-square btn-ghost"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* hamburger drop */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-2 border-t border-base-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="btn btn-ghost w-full text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
