const API_URL = "http://localhost:3000"; 

export const registerUser = async (username, password) => {
  const res = await fetch(`${API_URL}/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return res.json();
}

export const loginUser = async (username, password) => {
  const res = await fetch(`${API_URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
    credentials: 'include'
  });
  return res.json();
}

export const logoutUser = async () => {
  const res = await fetch(`${API_URL}/user/logout`, {
    method: 'POST',
    credentials: 'include'
  });
  return res.json();
}

export const fetchPosts = async (page = 0, order = 'asc') => {
  const response = await fetch(`${API_URL}/posts/page?page=${page}&order=${order}`);
  return response.json();
};

export const createPost = async (title, content, author) => {
  const res = await fetch(`${API_URL}/posts/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ title, content, author })
  });
  return res.json();
}

export const deletePost = async (id) => {
  const res = await fetch(`${API_URL}/posts/delete/${id}`, {
    method: 'DELETE',
    credentials: 'include'
  });
  return res.json();
}
export const getPostById = async (id) => {
    const res = await fetch(`${API_URL}/posts/${id}`);
    if (!res.ok) {
      return null; 
    }
    const data = await res.json();
    return data.post;
  };