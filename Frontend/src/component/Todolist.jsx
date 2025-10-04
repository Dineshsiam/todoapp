import Item from "./items";
export default function Todolist({todos,setToDos}) {
  return (
    <div className="">
      {todos.map((item) => (
        <Item key={item.name} item={item} todos={todos} setToDos={setToDos}/>
      ))}
    </div>
  );
}
