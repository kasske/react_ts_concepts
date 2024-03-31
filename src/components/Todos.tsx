import { useContext } from "react";
import TodoItem from "./TodoItem";
import style from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={style.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
