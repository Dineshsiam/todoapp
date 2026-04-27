# Todo App — Full Stack

A full-stack Todo application built with **React (Vite)** on the frontend and **Node.js + Express** on the backend, with data persisted in a local JSON file.

---

## Overview

This project lets users manage daily tasks through a clean interface backed by a REST API. It demonstrates end-to-end full-stack development — from UI components to API routes to data handling — without a database dependency.

---

## Features

- Add new todos
- View all tasks
- Delete tasks
- Backend API integration via Express
- Data persistence using a local JSON file

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Storage | JSON file |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Dineshsiam/todoapp.git
cd todoapp
```

### 2. Run the backend

```bash
cd Server
npm install
node index.js
```

### 3. Run the frontend

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## Project Structure

```
todoapp/
├── Frontend/        # React + Vite app
├── Server/          # Node.js + Express API
├── index.html       # Original vanilla HTML prototype
├── functionality.js # Original vanilla JS logic
└── stylesheet.css   # Original styles
```
