// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import { loginUser, registerUser } from '../api';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const data = await loginUser(username, password);
      console.log(data);
      
      if (data.userId) {
        navigate('/');
      } else {
        alert(data.error || "Login failed");
      }
    } else {
      const data = await registerUser(username, password);
      if (data.userId) {
        alert("Registration successful! Please login.");
        setIsLogin(true);
      } else {
        alert(data.error || "Registration failed");
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Username" 
            className="w-full border border-gray-300 p-2 rounded" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full border border-gray-300 p-2 rounded" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <div className="mt-4 text-center">
          {isLogin ? 
            <p>Don't have an account? <button onClick={()=>setIsLogin(false)} className="text-blue-600">Register</button></p> : 
            <p>Already have an account? <button onClick={()=>setIsLogin(true)} className="text-blue-600">Login</button></p>}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
