import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { fetchPosts } from "../api";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { RiSortAlphabetAsc, RiSortAlphabetDesc } from "react-icons/ri";

const AllPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    loadPage(currentPage, order);
  }, [currentPage, order]);

  const loadPage = async (page, sortOrder) => {
    const cacheKey = `posts:${sortOrder}:${page}`;

    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      const parsed = JSON.parse(cachedData);
      setPosts(parsed.posts);
      setPageCount(parsed.pageCount);
      console.log("Loaded posts from localStorage for", cacheKey);
    } else {
      const data = await fetchPosts(page, sortOrder);
      setPosts(data.posts || []);
      const totalPages = Math.ceil(data.totalCount / 9);
      setPageCount(totalPages);

      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          posts: data.posts || [],
          pageCount: totalPages,
        })
      );
      console.log("Fetched posts from DB and cached them for", cacheKey);
    }
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <Navbar />
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">All Posts</h1>

        {/* Sorting icon toggle */}
        {order === "asc" ? (
          <RiSortAlphabetAsc
            onClick={() => setOrder("desc")}
            className="font-bold text-2xl cursor-pointer"
            title="Sort descending"
          />
        ) : (
          <RiSortAlphabetDesc
            onClick={() => setOrder("asc")}
            className="font-bold text-2xl cursor-pointer"
            title="Sort ascending"
          />
        )}

        {/* Posts Grid */}
        <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg shadow-lg bg-white p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <h2 className="font-bold text-xl mb-4 text-gray-800">
                {post.title}
              </h2>
              <p className="flex-1 text-gray-700">
                {post.content.substring(0, 100)}...
              </p>
              <Link
                to={`/post/${post.id}`}
                className="text-blue-400 mt-4 hover:text-blue-800 transition-colors"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="flex justify-center mt-8">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"flex items-center space-x-2"}
              pageLinkClassName={"px-3 py-1 border rounded"}
              previousLinkClassName={"px-3 py-1 border rounded"}
              nextLinkClassName={"px-3 py-1 border rounded"}
              activeLinkClassName={"bg-blue-600 text-white"}
              forcePage={currentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPostsPage;
