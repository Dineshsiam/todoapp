import { useState } from "react";
import axios from "axios";

export default function Form({ todos, setToDos }) {
  const [todo, setToDo] = useState({ name: "", completed: false });

  const addTodo = () => {
    if (todo.name !== "") {
      axios
        .post("http://localhost:5000/todos", todo)
        .then((res) => {
          setToDos([...todos, res.data]);
          setToDo({ name: "", completed: false });
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex justify-center m-auto">
        <input
          onChange={(e) => setToDo({ name: e.target.value, completed: false })}
          type="text"
          value={todo.name}
          placeholder="Enter the task.."
          className="m-4 p-2 w-64 border bg-white rounded-md"
        />
        <button
          className="m-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          type="submit"
          onClick={addTodo}
        >
          ADD
        </button>
      </div>
    </form>
  );
}
