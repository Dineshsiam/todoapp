export default function Footer({todos}) {
  return (
    <div className="bg-yellow-500 text-red-500 flex justify-center fixed bottom-0 left-0 w-full shadow z-50 h-20">
      <h1 className="text-4xl p-4 font-bold">TASK TO COMPLETE :{todos.filter(todo=>todo.completed==false).length}</h1>
      <h1 className="text-4xl p-4 ml-4 font-bold">TASK COMPLETED: {todos.filter(todo=>todo.completed).length}</h1>
    </div>
  );
}
