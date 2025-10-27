import React, { useEffect, useState } from "react";
import BlogCard from "../components/shared/blog/BlogCard";
import HeroSub from "../components/shared/HeroSub";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blogs", text: "Blog List" },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 👇 Replace this URL with your actual API endpoint
        const response = await fetch(`${API_BASE_URL}/blogs`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Assuming your API returns an array of blog objects
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <HeroSub
        title="Blog List"
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou"
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="flex flex-wrap justify-center dark:bg-darkmode px-4">
        <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto">
          {loading && (
            <p className="text-center text-gray-500 text-lg my-10">
              Loading blogs...
            </p>
          )}
          {error && (
            <p className="text-center text-red-500 text-lg my-10">
              Error: {error}
            </p>
          )}
          {!loading && !error && (
            <div className="grid grid-cols-12 lg:gap-14 gap-6">
              {posts.length > 0 ? (
                posts.map((blog, i) => (
                  <div key={i} className="w-full col-span-12 lg:col-span-6">
                    <BlogCard blog={blog} />
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400 text-lg w-full">
                  No blog posts available.
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
