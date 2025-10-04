import axios from "axios";

export default function Item({ item, todos, setToDos }) {
  const markAsDone = () => {
    axios
      .put(`http://localhost:5000/todos/${item.name}`, { completed: true })
      .then(() => {
        const updatedTodos = todos.map((todo) =>
          todo.name === item.name ? { ...todo, completed: true } : todo
        );
        setToDos(updatedTodos);
      })
      .catch((err) => console.error(err));
  };

  const deleteTodo = () => {
    axios
      .delete(`http://localhost:5000/todos/${item.name}`)
      .then(() => {
        const updatedTodos = todos.filter((todo) => todo.name !== item.name);
        setToDos(updatedTodos);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center items-center m-3">
      <h1
        className={`text-2xl px-5 py-2 mr-4 border rounded-md bg-white shadow ${
          item.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {item.name}
      </h1>

      {!item.completed && (
        <button
          onClick={markAsDone}
          className="px-5 py-2 mr-2 text-white bg-green-500 hover:bg-green-600 rounded-md"
        >
          DONE
        </button>
      )}

      <button
        onClick={deleteTodo}
        className="px-5 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
      >
        DELETE
      </button>
    </div>
  );
}
