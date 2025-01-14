import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../api";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("posts:")) {
        localStorage.removeItem(key);
      }
    });
    await logoutUser();
    navigate("/auth");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
      <Link
        to="/"
        className="font-bold text-xl hover:scale-105 transition-transform"
      >
        My Blog
      </Link>
      <div className="space-x-4">
        <Link to="/posts" className="hover:underline">
          All Posts
        </Link>
        
        <Link to="/create" className="hover:underline">
          Create Post
        </Link>
        <button
          onClick={handleLogout}
          className="border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
