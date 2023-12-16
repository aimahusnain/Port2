import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (

      <div className="w-fit h-fit bg-zinc-800 text-white font-semibold transform inset-0 transform transition-all -skew-x-12 py-2">
        {/* Content inside the parallelogram */}
          <Link
            href={link}
            className={cx("text-xl", props.className)}
          >
            {name}
          </Link>
      </div>
  );
};

export default Tag;
