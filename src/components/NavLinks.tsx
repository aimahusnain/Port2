import Link from 'next/link'
import React, { useContext } from 'react'
import { AlexioContext } from '../Context';

const NavLinks = () => {
    const { changeNav, toggle, nav } = useContext(AlexioContext);

  return (
    <>
     <div>
          <Link
          href='/'
            className="text-dark dark:text-light cursor-pointer"
            onClick={() => changeNav("home", false)}
          >
            Home
          </Link>
        </div>
        
        <div className="pages-nav__item">
          <Link
          href='/'
            className="link link--page cursor-pointer"
            onClick={() => changeNav("about", false)}
          >
            About Us
          </Link>
        </div>

        <div className="pages-nav__item">
          <Link
          href='/'
            className="link link--page cursor-pointer"
            onClick={() => changeNav("resume", false)}
          >
            Our Services
          </Link>
        </div>

        <div className="pages-nav__item">
          <Link className="link link--page" href="/blog">
            Blog
          </Link>
        </div>

        <div className="pages-nav__item">
          <Link
          href='/'
            className="link link--page cursor-pointer"
            onClick={() => changeNav("portfolio", false)}
          >
            Portfolio
          </Link>
        </div>
        
        <div className="pages-nav__item">
          <Link
          href='/'
            className="link link--page cursor-pointer"
            onClick={() => changeNav("contact", false)}
          >
            Contact Us
          </Link>
        </div>
    </>
  )
}

export default NavLinks