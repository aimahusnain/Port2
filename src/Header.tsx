import { useContext } from "react";
import { AlexioContext } from "./Context";
import siteMetadata from "./utils/siteMetaData";
import ThemeToggler from "./components/theme";
import Link from "next/link";

const Header = () => {
  const { changeNav, nav, toggle } = useContext(AlexioContext);
  return (
   
      <header className="bg-boo-700 fixed top-0 right-0 flex justify-end sm:w-fit w-full z-[9999]">
        <p
          onClick={() => changeNav("home", false)}
          className="cursor-pointer text-white w-full flex justify-left items-center sm:text-xl font-bold uppercase float-left leading-8 tracking-wider py-[12px] px-5"
        >
          {siteMetadata.WebName}
        </p>
        <ThemeToggler />
        <div className="relative top-0 bottom-0 right-0 bg-black h-full w-[60px]">
          <button
            aria-label="Toggle Menu"
            className={`menu-button ${toggle ? "menu-button--open" : ""}`}
            onClick={() => changeNav(nav, !toggle)}
          >
            <span></span>
          </button>
        </div>
      </header>
  );
};
export default Header;
