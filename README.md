# 🚀 URL Shortener Project

A full-stack URL shortener application with user authentication, built using **Node.js**, **Express**, **MongoDB** on the backend, and **React**, **Redux**, and **React Query** on the frontend.

---

## 📌 Project Overview

This application allows users to register, log in, create short URLs, and manage them via a responsive interface. It includes a secure backend API and a modern frontend client.

---

## 🛠️ Backend

**Tech Stack**: `Node.js`, `Express`, `MongoDB`, `Mongoose`

### Features

- User authentication: Register, Login, Logout
- URL shortening and redirection
- Cookie-based session handling
- Middleware:
  - CORS for cross-origin requests
  - JSON body parser
  - Cookie parser
  - Auth middleware to attach user
  - Centralized error handling

### API Routes

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Log in
- `POST /api/auth/logout` – Log out
- `GET /api/user/profile` – Get logged-in user data
- `POST /api/create` – Create a short URL
- `GET /:id` – Redirect to original URL from short code

### Server

- Runs on: `http://localhost:3000`

---

## 💻 Frontend

**Tech Stack**: `React`, `Vite`, `Redux`, `React Query`, `React Router`

### Features

- User registration and login forms
- URL creation interface
- Dashboard to manage user-created URLs
- Protected routes for authenticated users
- Clean and responsive UI

### Structure

- Main entry: `src/main.jsx`
- State Management: `Redux`
- Data Fetching & Caching: `React Query`
- Routing: `React Router` with route tree

### Development Server

- Runs on: `http://localhost:5173`

---

## 🔁 Workflow

1. User registers and logs in via the frontend.
2. Authenticated user accesses the dashboard to create and manage short URLs.
3. Backend generates a unique short code for each original URL.
4. Visiting a short URL (e.g. `/abc123`) redirects to the original URL.
5. All operations are handled via API calls to the backend.

---

## 📦 Technologies Used

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- CORS
- cookie-parser

### Frontend

- React
- Vite
- Redux
- React Router
- React Query

---

## 📂 Project Structure

