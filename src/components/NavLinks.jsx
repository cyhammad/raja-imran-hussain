"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden items-center text-lg sm:flex sm:gap-2 md:gap-5">
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
      <div className="flex items-center sm:hidden">
        <Sheet>
          <SheetTrigger>{bars}</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl">Raja Imran Hussain</SheetTitle>
              <SheetDescription>
                A polio survivor, revolutionizes disabled sports and champions
                social inclusion. His pioneering efforts inspire and transform
                communities, earning global recognition.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col items-center gap-5 py-10 text-lg">
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
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

const bars = (
  <svg
    width="28"
    height="22"
    viewBox="0 0 48 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 3C0 1.346 1.346 0 3 0H38V6H3C1.346 6 0 4.654 0 3ZM48 3C48 1.346 46.654 0 45 0H40V6H45C46.655 6 48 4.654 48 3ZM3 14H30V8H3C1.346 8 0 9.346 0 11C0 12.654 1.346 14 3 14ZM45 8H32V14H45C46.654 14 48 12.654 48 11C48 9.346 46.655 8 45 8ZM0 19C0 20.654 1.346 22 3 22H34V16H3C1.346 16 0 17.346 0 19ZM45 16H36V22H45C46.654 22 48 20.654 48 19C48 17.346 46.655 16 45 16Z"
      fill="black"
    />
  </svg>
);

export default NavLinks;
