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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      section.classList.add("pulse-simple");
      setTimeout(() => section.classList.remove("pulse-simple"), 600);
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-transform duration-300 shadow-md ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-base-100 border-b border-base-300`}
    >
      <div className="w-full px-4 py-3 flex justify-end items-center">
        <div className="flex gap-4 items-center">
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
      </div>
    </nav>
  );
}
