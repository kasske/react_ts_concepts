import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import style from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
    const TodosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    /* !. when you are sure its not null */
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    TodosCtx.addTodo(enteredText);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={style.form}
    >
      <label
        htmlFor="todoText"
        className={style.label}
      >
        Todo text
      </label>
      <input
        type="text"
        name="todoText"
        id="todoText"
        ref={todoTextInputRef}
        className={style.input}
      />
      <button className={style.button}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
