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
    <li className={`portfolio-item bg-transparent border rounded-lg p-1 border-white/60 w-fit h-fit pb-4 ${categary}`}>
      <div>
        <div className="object-cover rounded-lg">
          <Link href={`https://${webURL}`} target="_blank">
            <Image
            className="rounded-lg"
              width={230}
              height={100}
              src={imageSrc}
              title=""
              alt=""
            />
          </Link>
          
        </div>
        <div className="portfolio-info ml-1">
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
