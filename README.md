# ⚙️ BlogApp Backend (Node.js + Express + MongoDB)

This is the **backend** of the BlogApp built with **Node.js, Express.js, and MongoDB**.  
It provides secure REST APIs for authentication, blog posts, comments, and admin controls.

---

## 🚀 Features

- 🔐 User Authentication & Authorization (JWT + Bcrypt)  
- 📝 Blog Post Management (create, edit, delete, fetch posts)  
- 🏷️ Tagging, search & filtering for blogs  
- 💬 Comment Management (add, edit, delete comments)  
- 🧑‍💼 Admin APIs for managing users, posts, and comments  
- 🌩️ Image upload with Cloudinary  
- ⚡ Structured with MVC pattern using Mongoose  

---

## 🧰 Tech Stack

- Node.js + Express.js  
- MongoDB + Mongoose  
- JWT + Bcrypt  
- Multer + Cloudinary  

---

## ⚙️ Installation Guide

### ✅ Prerequisites
- Node.js (v14 or later)  
- MongoDB (local or Atlas)  
- npm or yarn  

### 🔧 Setup Instructions
```bash
# Go inside backend folder
cd Backend

# Install dependencies
npm install

# Create .env file and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000

# Run server
npm run dev
