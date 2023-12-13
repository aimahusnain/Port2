import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import GithubSlugger, { slug } from "github-slugger";
import { allBlogs } from "@/.contentlayer/generated";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-"," ")} Blogs`,
    description: `Learn more about ${params.slug === "all" ? "web development" : params.slug} through our collection of expert blogs and tutorials`,
  };
}
const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (sortedBlogs.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });
  
  return (
    <section className="w-full md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex  justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-light dark:text-dark">
          Recent Posts
        </h2>
        <Link
          href="/blog/categories/all"
          className="text-light inline-block font-medium underline underline-offset-2 text-base md:text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
