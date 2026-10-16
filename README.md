# 🔐 JWT Authentication System

A full-stack authentication application built with **React, Node.js, Express.js, MongoDB, and JSON Web Tokens (JWT)**. It provides user registration, login, protected routes, session verification, and logout functionality.

## 📌 Project Overview

This project was developed as **Task 3 of the Alfido Tech internship tasks** to practice secure authentication and full-stack application development.

## ✨ Features

- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- HTTP-only cookie for storing the authentication token
- Protected dashboard and API routes
- Current user profile verification
- Secure logout functionality
- MongoDB database integration
- Responsive React user interface
- Error handling and form validation

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React + Vite | Frontend |
| Node.js | Runtime environment |
| Express.js | Backend API |
| MongoDB + Mongoose | Database |
| JSON Web Token | Authentication |
| bcrypt | Password hashing |
| Cookie Parser | Cookie handling |
| CSS | Responsive styling |

## 📂 Project Structure

```text
Task3-JWT-Authentication/
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env
│   └── server.js
├── frontend/
│   └── src/
│       ├── components/
│       │   └── ProtectedRoute.jsx
│       ├── pages/
│       │   ├── Signup.jsx
│       │   ├── Login.jsx
│       │   └── Dashboard.jsx
│       ├── api.js
│       ├── App.jsx
│       └── index.css
├── .gitignore
└── README.md
```

## ⚙️ Prerequisites

Install the following before running the project:

- Node.js and npm
- MongoDB running locally, or a MongoDB connection URI
- Git

## 🚀 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/vanshika2723/Task3-JWT-Authentication.git
cd Task3-JWT-Authentication
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder with the following configuration:

```env
PORT=5001
MONGO_URI=mongodb://127.0.0.1:27017/task3_auth
JWT_SECRET=your_long_random_secret
NODE_ENV=development
FRONTEND_URL=http://localhost:5174
```

Replace `your_long_random_secret` with a strong, private secret. Never upload your `.env` file or authentication secrets to GitHub.

Start the backend:

```bash
npm run dev
```

If your backend does not have a `dev` script, use `node server.js` instead.

### 3. Set up the frontend

Open a second terminal in the project root and run:

```bash
cd frontend
npm install
npm run dev -- --port 5174
```

Open the local URL displayed by Vite, normally:

http://localhost:5174

Ensure MongoDB is running and that the backend's frontend URL and frontend API URL match your configuration.

## 🔑 Authentication Flow

1. A new user registers through the signup page.
2. The backend hashes the password using bcrypt before saving it.
3. The user logs in with their registered credentials.
4. The server issues a JWT and stores it in an HTTP-only cookie.
5. Protected routes verify the authentication token.
6. The dashboard displays the authenticated user's information.
7. Logout clears the authentication cookie.

## 🔌 API Endpoints

Base URL: `http://localhost:5001/api/auth`

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/signup` | Register a new user |
| POST | `/login` | Authenticate a user |
| GET | `/me` | Retrieve the current user |
| POST | `/logout` | Log out the user |
| GET | `/protected` | Access a protected resource |

## 🧪 Testing Checklist

Test these scenarios after starting the application:

- [ ] Register a new account.
- [ ] Try logging in with valid credentials.
- [ ] Verify that incorrect credentials are rejected.
- [ ] Open the dashboard after logging in.
- [ ] Check that protected content requires authentication.
- [ ] Log out and verify that the protected dashboard is no longer accessible.
- [ ] Check validation and error messages.

Mark an item complete only after testing it successfully.

## 🔒 Security Notes

- Passwords should never be stored in plain text.
- Keep JWT secrets and database credentials out of source control.
- Use HTTPS in production.
- Configure secure cookie settings for production deployment.
- Validate and sanitize user input.
- Apply appropriate rate limiting to authentication endpoints.

## 👩‍💻 Author

**Vanshika Khandelwal**

- GitHub: [@vanshika2723](https://github.com/vanshika2723)
- Project Repository: [Task3-JWT-Authentication](https://github.com/vanshika2723/Task3-JWT-Authentication)

## 📄 Internship Task

**Organization:** Alfido Tech  
**Task:** Task 3 — JWT Authentication System

---

⭐ If you find this project useful, consider giving the repository a star.
