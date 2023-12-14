import React from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioBox = ({
  imageSrc,
  webURL,
  title,
  categary,
  description,
}: {
  categary: string;
  imageSrc: string;
  webURL?: string;
  title: string;
  description: any;
}) => {
  return (
    // portfolio-
    // portfolio-img
    // portfolio-info
    // portfolio-hover-01
    <li className={`portfolio-item ${categary}`}>
      <div className="">
        <div className="">
          <Link href={`https://${webURL}`} target="_blank">
            <Image
              width={230}
              height={100}
              src={imageSrc}
              title=""
              alt=""
            />
          </Link>
          
        </div>
        <div className="portfolio-info">
          <Link href={`https://${webURL}`} target="_blank">
          {title}
          </Link>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default PortfolioBox;
