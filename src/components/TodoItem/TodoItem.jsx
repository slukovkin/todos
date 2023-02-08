import cl from "./todoitem.module.css"

const TodoItem = ({todo, removeTask}) => {

  const deleteTodo = () => {
    removeTask(todo.id)
  }
  
  return (
    <div className={cl.task_wrapper}>
      <input type="checkbox" />
      <span>
        {todo.title}
      </span>
      <button className={cl.btn_close} onClick={deleteTodo}>x</button>
    </div>
  )
}

export default TodoItem
