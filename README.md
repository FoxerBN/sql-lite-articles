# 🌐 Full-Stack Blog Application

This project is a full-stack blog application featuring 🧑‍💻 authentication, 📝 post management, and a 🔒 protected route system. The backend is built with Node.js 🟢 and SQLite 🗄️, while the frontend uses React ⚛️ and TailwindCSS 🎨.

---

## ✨ Features

- 🆕 User Registration and Login with 🔑 JWT-based Authentication.
- ✏️ Create, 📖 Read, ✂️ Update, and ❌ Delete (CRUD) functionality for blog posts.
- 📄 Pagination and 🔄 sorting for blog posts.
- 🔒 Secure backend using 🛡️ middleware for authentication and validation.
- 🚪 Protected routes to restrict access to authenticated users.
- ⚡ Cache optimization using `localStorage` for frontend performance.
- 🖌️ Styled with TailwindCSS for a responsive and modern design.

---

## 🛠️ Technologies Used

### Backend:
- **Node.js** 🟢 with **Express** 🚀
- **SQLite** 🗄️ using **better-sqlite3** for database management
- **jsonwebtoken** 🔑 for token-based authentication
- **bcrypt** 🔒 for password hashing
- **dotenv** 🛠️ for environment configuration

### Frontend:
- **React** ⚛️ with **React Router** 🗺️
- **React Paginate** 🔄 for pagination
- **TailwindCSS** 🎨 for styling

---

## ⚙️ Setup Instructions

### 📋 Prerequisites:
- Node.js 🟢 installed
- SQLite database file created

### Backend Setup:

1. Clone the repository:
   ```bash
   git clone https://github.com/FoxerBN/your-repo.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add the following:
   ```env
   JWT_SECRET=your-secret-key
   ```
5. Start the backend server:
   ```bash
   nodemon index.js
   ```

### Frontend Setup:

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🌐 API Endpoints

### 👤 User Routes:

- `POST /user/register` - 🆕 Register a new user
- `POST /user/login` - 🔑 Login a user and set JWT token
- `POST /user/logout` - 🚪 Logout user by clearing token
- `GET /user/auth-check` - ✔️ Verify if user is authenticated

### 📝 Post Routes:

- `GET /posts/page?page={page}&order={order}` - 📄 Fetch paginated and sorted posts
- `POST /posts/create` - ✏️ Create a new post
- `DELETE /posts/delete/{id}` - ❌ Delete a post by ID
- `GET /posts/{id}` - 📋 Get post details by ID

---

## 🗄️ Database Schema

### Users Table:
```sql
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  password TEXT NOT NULL
);
```

### Posts Table:
```sql
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  date TEXT NOT NULL
);
```

---

## 🗂️ Folder Structure

```
project-root
├── src
│   ├── backend
│   │   ├── config
│   │   ├── routes
|   |   ├── controllers
|   |   ├── middlewares
|   |   ├── functions
│   │   └── index.js
│   ├── frontend
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   ├── api.js
│   │   └── ProtectedRoute.jsx
├── README.md
└── package.json
```

---

## 🛠️ How to Use

1. Navigate to `/auth` to register or log in. 🔑
2. After logging in, you'll be redirected to the main page. 📄
3. Create, view, and delete posts as needed. 📝
4. Use the pagination controls to navigate through posts. 🔄

---

## 📬 Contact

- **Email**: 📧 [barspin4499@gmail.com](mailto:barspin4499@gmail.com)
- **GitHub**: 🐱 [FoxerBN](https://github.com/FoxerBN)

