import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";

export default function ToDo() {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/todos")
      .then(res => setToDos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="pt-28 pb-20 bg-gray-200 h-screen overflow-y-auto">
      <div className="max-w-2xl mx-auto p-4">
        <Form todos={todos} setToDos={setToDos} />
        <Todolist todos={todos} setToDos={setToDos} />
      </div>
      <Footer todos={todos}/>
    </div>
  );
}

