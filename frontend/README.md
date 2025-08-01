# 📘 Learnfinity – MERN Stack Interactive E-Learning Platform

Learnfinity is a full-stack MERN-based interactive e-learning platform built using **React (with Vite)**, **MongoDB**, and **React-Bootstrap**. It features structured course modules, quizzes, and code editors to help users learn web development dynamically.

---

## 🎬 Demo

🔗 **Live Site**: [https://learnfinity.vercel.app](https://learnfinity.vercel.app)




## ✨ Features

- 📚 Course pages for HTML, CSS, JavaScript, React, and more
- 🧠 Quiz 
- 💻 Integrated code editor (Monaco) for real-time coding
- 🗃️ MongoDB-powered backend for user data and progress
- 🎨 Responsive layout using React-Bootstrap
- 🌙 Dark/Light theme support
- ⚡ Blazing fast with Vite + optimized asset loading

---

## 🛠 Tech Stack

| Frontend       | Backend       | Tools & Libraries             |
|----------------|---------------|-------------------------------|
| React + Vite   | Node.js       | React-Bootstrap               |
| React Router   | Express.js    | Monaco Editor                 |
| Axios / Fetch  | MongoDB       | Vercel (Frontend Hosting)
                                 | Render(Backend Hosting)       |

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

```bash
# backend

git clone https://github.com/Tasneemsd/Learnfinity-Backend.git
cd Learnfinity-Backend
npm install
node server.js
cd Learnfinity-Frontend
npm create vite@latest .
npm run dev


Learnfinity/
├── assets/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
├── package.json
├── vite.config.js
├── README.md

Developed by Tasneem Banu as part of MERN stack training.