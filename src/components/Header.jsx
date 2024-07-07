import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="fixed z-50 flex w-full items-center justify-center border-b border-black/10">
      <div className="flex w-full max-w-7xl items-center justify-between px-5 py-3">
        <div className="flex gap-1 text-4xl font-extrabold text-gray">
          <span className="text-darkGray">Raja Imran</span>
          <span className="text-gray">Hussain</span>
        </div>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
