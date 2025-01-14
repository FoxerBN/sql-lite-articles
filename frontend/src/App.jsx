// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import AllPostsPage from './pages/AllPostsPage';
import SinglePostPage from './pages/SinglePostPage';
import CreatePostPage from './pages/CreatePostPage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
        <Route path="/posts" element={<ProtectedRoute><AllPostsPage /></ProtectedRoute>} />
        <Route path="/post/:id" element={<ProtectedRoute><SinglePostPage /></ProtectedRoute>} />
        <Route path="/create" element={<ProtectedRoute><CreatePostPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
