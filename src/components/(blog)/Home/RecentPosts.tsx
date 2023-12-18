import { useState } from "react";
import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

const RecentPosts = ({ blogs, textcolour, width, height }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const displayedBlogs = sortedBlogs.slice(startIndex, endIndex);

  return (

<section className="w-full h-full mt-7 p-7 flex flex-col items-center justify-center">

      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-light dark:text-dark">
          Recent Posts
        </h2>
        <Link
          href="/blog/categories/all"
          className="capitalize text-light dark:text-black inline-block font-medium underline underline-offset-2 text-base md:text-lg"
        >
          View all categories
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {displayedBlogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree
              titlesize='text-xl'
              textcolour={textcolour}
              blog={blog}
            />
          </article>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        {/* Left arrow for navigation */}
        <button
        aria-label="Left Arrow For Navigation"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`mx-2 py-2 px-4 rounded-lg ${
            currentPage === 1
              ? "cursor-not-allowed"
              : "text-white dark:text-black hover:animate-bounce transition-transform"
          }`}
        >
          <ChevronLeftCircle />
        </button>

        {Array.from({
          length: Math.ceil(sortedBlogs.length / blogsPerPage),
        }).map((_, index) => {
          const pageNumber = index + 1;
          // Always show the first two pages and the last two pages
          const isEdgePage =
            pageNumber <= 2 ||
            pageNumber > Math.ceil(sortedBlogs.length / blogsPerPage) - 2;
          // Show current page and its neighbors
          const isCurrentOrNeighbor = Math.abs(currentPage - pageNumber) <= 1;
          // Show ellipsis if there are hidden pages between
          const showEllipsis =
            pageNumber === 3 ||
            pageNumber === Math.ceil(sortedBlogs.length / blogsPerPage) - 2;

          if (isEdgePage || isCurrentOrNeighbor) {
            return (
              <button
              aria-label="pages"
                key={index}
                onClick={() => handlePageChange(pageNumber)}
                className={`mx-2 py-2 px-4 rounded-full ${
                  currentPage === pageNumber
                    ? "text-light bg-gradient-to-br from-indigo-500 to-pink-500 font-bold"
                    : "text-light dark:text-black font-sembold "
                }`}
              >
                {pageNumber}
              </button>
            );
          } else if (showEllipsis) {
            return (
              <span key={index} className="text-light dark:text-black mx-2 py-2 px-4">
                ...
              </span>
            );
          }

          return null;
        })}

        {/* Right arrow for navigation */}
        <button
aria-label="Right Arrow For Navigation"
onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(sortedBlogs.length / blogsPerPage)
          }
          className={`mx-2 py-2 px-4 rounded-lg ${
            currentPage === Math.ceil(sortedBlogs.length / blogsPerPage)
              ? "cursor-not-allowed"
              : "text-white dark:text-black hover:animate-bounce"
          }`}
        >
          <ChevronRightCircle />
        </button>
      </div>
    </section>
  );
};

export default RecentPosts;
