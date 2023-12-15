import { format } from "date-fns";
import Link from "next/link";

const BlogLayoutThree = ({ blog, textcolour, width, height, }) => {
  return (
    <div className={`group flex flex-col items-center ${textcolour}`}>
      <div className={`flex flex-col ${height} ${width} mt-4 space-y-4`}>
        <span className={`uppercase ${textcolour} font-semibold text-xs sm:text-sm`}>
          {blog.tags[0]}
        </span>
        <Link href={`/blog/${blog.url}`} className="inline-block my-1">
          <h2 className="font-bold w-fit h-fit capitalize text-base sm:text-xl">
            <span
              className="hover:text-pinky-600 bg-gradient-to-r from-boo-700 to-pinky-700 bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px]  bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
        <p className="font-normal text-base sm:text-sm">{blog.description}</p>

        <div className="flex gap-4">
          <p>Unknown</p>
          <p className="capitalize text-white/50 font-semibold text-sm sm:text-base">
            {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
