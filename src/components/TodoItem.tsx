import style from './TodoItem.module.css'

const TodoItem: React.FC<{ title: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={style.item}>{props.title}</li>
  )
}

export default TodoItem