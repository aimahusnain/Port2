'use client'

import { useContext, useEffect, useState } from "react";
import { AlexioContext } from "./Context";

const Nav = () => {
  const { changeNav, toggle, nav } = useContext(AlexioContext);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page, index) => {
      page.style.opacity = 0;
      page.style.zIndex = 2;
      page.style.transform = `translate3d(0px, 75%, -300px)`;
      if (toggle) {
        if (nav == page.id) {
          setActiveIndex(index);
          page.style.zIndex = 5;
          page.style.transform = `translate3d(0px, 75%, -200px)`;
          page.style.opacity = `1`;
        }
        let next =
            pages.length - 1 == activeIndex
              ? pages[0]
              : pages.length - 2 == activeIndex
              ? pages[activeIndex + 1]
              : pages[activeIndex + 1],
          next2 =
            pages.length - 1 == activeIndex
              ? pages[1]
              : pages.length - 2 == activeIndex
              ? pages[0]
              : pages[activeIndex + 2];

        next.style.zIndex = 4;
        next.style.transform = `translate3d(0px, 75%, -250px)`;
        next.style.opacity = `.9`;

        next2.style.zIndex = 3;
        next2.style.transform = `translate3d(0px, 75%, -300px)`;
        next2.style.opacity = `.8`;
      } else {
        if (nav == page.id) {
          setActiveIndex(index);
          page.style.zIndex = 5;
          page.style.opacity = `1`;
          page.style.transform = `translate3d(0px, 0px, 0px)`;
        }
      }
    });
  }, [toggle, nav]);

  
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
