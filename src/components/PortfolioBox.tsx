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
    <li className={`portfolio-item ${categary}`}>
      <div className="portfolio-col portfolio-hover-01">
        <div className="portfolio-img">
          <Link href={`https://${webURL}`} target="_blank">
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
          <Link href={`https://${webURL}`} target="_blank">
          <h5>{title}</h5>
          </Link>
          <span>{description}</span>
        </div>
      </div>{" "}
    </li>
  );
};

export default PortfolioBox;
