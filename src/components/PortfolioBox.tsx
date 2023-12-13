import React from 'react'
import Link from "next/link";
import Image from "next/image";

const PortfolioBox = ({imageSrc, webURL, title, catogary , description}:{catogary: string ,  imageSrc: string, webURL?: string, title: string, description: any}) => {
  return (
    <div className={`portfolio-item ${catogary}`}>
    <div className="portfolio-col portfolio-hover-01">
      <div className="portfolio-img">
        <Link href={webURL}>
          <Image
          loading="lazy"
            width={230}
            height={100}
            src={imageSrc}
            title=""
            alt=""
          />
        </Link>
      </div>
      <div className="portfolio-info">
        <h5>{title}</h5>
        <span>{description}</span>
      </div>
    </div>
  </div>
  )
}

export default PortfolioBox