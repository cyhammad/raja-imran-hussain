"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-5 text-xl">
      <Link
        className={`px-1 ${pathname === "/" ? "text-darkGray" : "text-gray hover:text-darkGray"}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`px-1 ${pathname === "/about" ? "text-darkGray" : "text-gray hover:text-darkGray"}`}
        href="/about"
      >
        About
      </Link>
      <Link
        className={`px-1 ${pathname === "/news" ? "text-darkGray" : "text-gray hover:text-darkGray"}`}
        href="/news"
      >
        News
      </Link>
      <Link
        className={`px-1 ${pathname === "/achievements" ? "text-darkGray" : "text-gray hover:text-darkGray"}`}
        href="/achievements"
      >
        Achievements
      </Link>
      <Link
        className={`px-1 ${pathname === "/gallery" ? "text-darkGray" : "text-gray hover:text-darkGray"}`}
        href="/gallery"
      >
        Gallery
      </Link>
      <Link
        className={`px-1 ${pathname === "/contact" ? "text-darkGray" : "text-gray hover:text-darkGray"}`}
        href="/contact"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
