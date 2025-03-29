import { Link } from "react-router";
import DesktopNav from "./components/DesktopNav/index.jsx";
import MobileNav from "./components/MobileNav/index.jsx";

function Header() {
  return (
    <header className="fixed w-full h-[70px] flex justify-between top-0 items-center shadow-sm px-10 md:px-20 py-5 z-20">
      <Link to={"/"}>
        <img src="vite.svg" className="w-10 h-10 cursor-pointer" alt="logo" />
      </Link>
      <DesktopNav />
      <MobileNav />
    </header>
  );
}

export default Header;
