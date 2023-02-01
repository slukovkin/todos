import cl from "./todoitem.module.css"

const TodoItem = (props) => {
  const { todos, setTodos } = props.todos

  const newTask = (evt) => {
    setTodos("OK")
  }

  return (
    <div>
      <h2>ToodoItem</h2>
      <input
        type='text'
        placeholder='Введите задачу'
        value={title}
        onChange={(evt) => setTodos(evt.target.value)}
      />
      <button className='newTask' onClick={newTask}>
        Создать
      </button>
    </div>
  )
}

export default TodoItem
