import Link from 'next/link'
import React, { useContext } from 'react'
import { AlexioContext } from "../Context";

const portFolio = () => {
    const { changeNav, toggle, nav } = useContext(AlexioContext);

  return (
    <div className="pages-nav__item">
          <Link
            href=""
            className="link link--page"
            onClick={() => changeNav("about", false)}
          >
            About Us
          </Link>
        </div>
  )
}

export default portFolio