import style from ",/TodoItem.module.css";
export default function TodoItem({ todo }) 
{
  function handleClick(todo)
  {
    console.log("Delte button Clicked", todo);
  }
  return
  (<div>
    <h2 key={todo}>{todo}</h2>;
    <span><button onClick={()=>handleClick(todo)}>x</button></span>
  </div>);
}
