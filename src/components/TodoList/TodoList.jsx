import cl from "./todolist.module.css"
import TodoItem from "../TodoItem/TodoItem"

const TodoList = ({ visible, message }) => {
  return (
    <div className={cl.wrapper}>
      <h2>TodoList</h2>
      <input
        className="input_task"
        type='text'
        placeholder='Введите задачу'
      />
      <button className='newTask'>
        +
      </button>
      {visible ? <TodoItem /> : <h4>{message}</h4>}
    </div>
  )
}

export default TodoList
