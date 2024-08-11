import Link from "next/link";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="fixed z-50 flex w-full bg-white items-center justify-center border-b border-black/10">
      <div className="flex w-full max-w-7xl items-center justify-between px-5 py-5">
        <Link href="/" className="flex gap-1 text-3xl font-extrabold text-gray">
          <span className="text-darkGray">Raja Imran</span>
          <span className="text-gray">Hussain</span>
        </Link>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
