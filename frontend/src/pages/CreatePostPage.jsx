import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { createPost } from "../api";
import { useNavigate } from "react-router-dom";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [errors, setErrors] = useState({ title: "", content: "", author: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    let tempErrors = { title: "", content: "", author: "" };
    if (!title) tempErrors.title = "Title is required";
    if (!content) tempErrors.content = "Content is required";
    if (!author) tempErrors.author = "Author is required";
    if (tempErrors.title || tempErrors.content || tempErrors.author) {
      setErrors(tempErrors);
      return;
    }

    const res = await createPost(title, content, author);
    if (res.id) {
      alert("Post created successfully");
      navigate("/posts");
    } else {
      alert("Failed to create post");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <Navbar />
      <div className="max-w-xl mx-auto p-8 bg-white mt-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Title"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setErrors({ ...errors, title: "" });
              }}
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>

          <div>
            <textarea
              placeholder="Content"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500 h-32"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                setErrors({ ...errors, content: "" });
              }}
            ></textarea>
            {errors.content && <p className="text-red-500">{errors.content}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Author"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
                setErrors({ ...errors, author: "" });
              }}
            />
            {errors.author && <p className="text-red-500">{errors.author}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
