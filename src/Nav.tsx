import { useContext, useEffect, useState } from "react";
import { AlexioContext } from "./Context";

const Nav = () => {
  const { changeNav, toggle, nav } = useContext(AlexioContext);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page, index) => {
      const pageElement = page as HTMLElement; // Explicitly cast to HTMLElement
      pageElement.style.opacity = "0";
      pageElement.style.zIndex = "2";
      pageElement.style.transform = `translate3d(0px, 75%, -300px)`;
      
      if (toggle) {
        if (nav === page.id) {
          setActiveIndex(index);
          pageElement.style.zIndex = "5";
          pageElement.style.transform = `translate3d(0px, 75%, -200px)`;
          pageElement.style.opacity = "1";
        }
        let next =
          pages.length - 1 === activeIndex
            ? pages[0]
            : pages.length - 2 === activeIndex
            ? pages[activeIndex + 1]
            : pages[activeIndex + 1],
          next2 =
            pages.length - 1 === activeIndex
              ? pages[1]
              : pages.length - 2 === activeIndex
              ? pages[0]
              : pages[activeIndex + 2];

        const nextElement = next as HTMLElement;
        nextElement.style.zIndex = "4";
        nextElement.style.transform = `translate3d(0px, 75%, -250px)`;
        nextElement.style.opacity = ".9";

        const next2Element = next2 as HTMLElement;
        next2Element.style.zIndex = "3";
        next2Element.style.transform = `translate3d(0px, 75%, -300px)`;
        next2Element.style.opacity = ".8";
      } else {
        if (nav === page.id) {
          setActiveIndex(index);
          pageElement.style.zIndex = "5";
          pageElement.style.opacity = "1";
          pageElement.style.transform = `translate3d(0px, 0px, 0px)`;
        }
      }
    });
  }, [toggle, nav, activeIndex]);

  
  return (
    <nav className={`pages-nav ${toggle ? "pages-nav--open" : ""}`}>
      <div className="pages-nav__item">
        <a className="link link--page" onClick={() => changeNav("home", false)}>
          Home
        </a>
      </div>
      <div className="pages-nav__item">
        <a
          className="link link--page"
          onClick={() => changeNav("about", false)}
        >
          About Us
        </a>
      </div>

      <div className="pages-nav__item">
        <a
          className="link link--page"
          onClick={() => changeNav("resume", false)}
        >
          Resume
        </a>
      </div>

      <div className="pages-nav__item">
        <a
          className="link link--page"
          href="blog"
        >
          Blog
        </a>
      </div>
      
      <div className="pages-nav__item">
        <a
          className="link link--page"
          onClick={() => changeNav("portfolio", false)}
        >
          Portfolio
        </a>
      </div>
      <div className="pages-nav__item">
        <a
          className="link link--page"
          onClick={() => changeNav("contact", false)}
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};
export default Nav;
