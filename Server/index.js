import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 5000;
const DATA_FILE = "./todos.json";

// Middleware
app.use(cors());
app.use(express.json());

// Helper: read todos from file
function readTodos() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
}

// Helper: write todos to file
function writeTodos(todos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}

// GET all todos
app.get("/todos", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

// POST new todo
app.post("/todos", (req, res) => {
  const todos = readTodos();
  const newTodo = req.body; // { name, completed }
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});

// PUT update todo
app.put("/todos/:name", (req, res) => {
  let todos = readTodos();
  todos = todos.map((todo) =>
    todo.name === req.params.name ? { ...todo, ...req.body } : todo
  );
  writeTodos(todos);
  res.json({ message: "Todo updated" });
});

// DELETE todo
app.delete("/todos/:name", (req, res) => {
  let todos = readTodos();
  todos = todos.filter((todo) => todo.name !== req.params.name);
  writeTodos(todos);
  res.json({ message: "Todo deleted" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
