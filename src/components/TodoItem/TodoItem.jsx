import cl from "./todoitem.module.css"

const TodoItem = ({todo}) => {

  return (
    <div className={cl.task_wrapper}>
      <input type="checkbox" />
      <span>
        {todo.title}
      </span>
      <button className={cl.btn_close}>x</button>
    </div>
  )
}

export default TodoItem
