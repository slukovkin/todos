import cl from "./todolist.module.css"
import TodoItem from "../TodoItem/TodoItem"

const TodoList = ({ todos }) => {
  return (
    <div className={cl.wrapper}>
      <h2>Список задач</h2>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        )
      })}
    </div>
  )
}

export default TodoList
