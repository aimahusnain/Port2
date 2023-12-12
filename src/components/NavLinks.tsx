import Link from 'next/link'
import React, { useContext } from 'react'
import { AlexioContext } from '../Context';

const NavLinks = () => {
    const { changeNav, toggle, nav } = useContext(AlexioContext);

  return (
    <>
     <div>
          <p
            className="text-dark dark:text-light cursor-pointer"
            onClick={() => changeNav("home", false)}
          >
            Home
          </p>
        </div>
        
        <div className="pages-nav__item">
          <p
            className="link link--page cursor-pointer"
            onClick={() => changeNav("about", false)}
          >
            About Us
          </p>
        </div>

        <div className="pages-nav__item">
          <p
            className="link link--page cursor-pointer"
            onClick={() => changeNav("resume", false)}
          >
            Our Services
          </p>
        </div>

        <div className="pages-nav__item">
          <Link className="link link--page" href="/blog">
            Blog
          </Link>
        </div>

        <div className="pages-nav__item">
          <p
            className="link link--page cursor-pointer"
            onClick={() => changeNav("portfolio", false)}
          >
            Portfolio
          </p>
        </div>
        
        <div className="pages-nav__item">
          <p
            className="link link--page cursor-pointer"
            onClick={() => changeNav("contact", false)}
          >
            Contact Us
          </p>
        </div>
    </>
  )
}

export default NavLinks