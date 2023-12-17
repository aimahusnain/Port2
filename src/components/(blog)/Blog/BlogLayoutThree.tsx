import { format } from "date-fns";
import Link from "next/link";

const BlogLayoutThree = ({ blog, textcolour, titlesize}) => {
  return (
    <div className={`group flex flex-col ${textcolour}`}>
      <div className={`flex flex-col mt-4 space-y-4`}>
        <span className={`uppercase ${textcolour} font-semibold text-xs sm:text-sm`}>
          {blog.tags[0]}
        </span>
        <Link href={`/blog/${blog.url}`} className="inline-block my-1">
          <h2 className={`hover:text-pinky-500 font-bold w-fit h-fit capitalize text-base sm:${titlesize}`}>
            {blog.title}
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
