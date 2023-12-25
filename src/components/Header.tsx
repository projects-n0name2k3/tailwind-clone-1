import LogoWhite from "./LogoWhite";

const NavItems = [
  "Home",
  "Hotels",
  "Restaurants",
  "Tours",
  "Destinations",
  "Activities",
  "Contact",
];

const Header = () => {
  return (
    <header className="flex items-center self-stretch h-12 w-full">
      <div className="text-white">
        <LogoWhite />
      </div>
      <div className="flex items-center justify-center flex-[1_0_0] text-white gap-1 text-sm opacity-70">
        {NavItems.map((item) => (
          <a href="" className="px-6">
            {item}
          </a>
        ))}
      </div>
      <div className="flex justify-end items-center gap-2 text-white text-sm">
        <div className="flex flex-col">
          <span className=" opacity-50">Name</span>
          <span className="opacity-100 font-medium">Ales Nesetril</span>
        </div>
        <span className="w-12 h-12 black rounded-full bg-red-300">
          <img src="" alt="" />
        </span>
      </div>
    </header>
  );
};

export default Header;
