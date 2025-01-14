import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams, useNavigate } from 'react-router-dom'
import { getPostById, deletePost } from '../api'

const SinglePostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const p = await getPostById(id);
      if (!p) {
        alert("Post not found");
        navigate('/posts');
      } else {
        setPost(p);
      }
    }
    loadPost();
  }, [id, navigate]);

  const handleDelete = async () => {
    const res = await deletePost(id);
    if (res.message) {
      alert(res.message);
      navigate('/posts');
    } else {
      alert("Failed to delete");
    }
  }

  if (!post) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <Navbar />
      <div className="p-8 text-center text-gray-800">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto bg-white mt-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
        <p className="mb-4 text-gray-700 whitespace-pre-line">{post.content}</p>
        <p className="text-sm text-gray-600 mb-6">By {post.author} on {post.date}</p>
        <button 
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Delete Post
        </button>
      </div>
    </div>
  )
}

export default SinglePostPage;
