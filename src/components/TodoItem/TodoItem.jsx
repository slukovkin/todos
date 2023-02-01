import cl from "./todoitem.module.css"

const TodoItem = ({todo}) => {
  return (
    <div>
      <h3>{todo}</h3>
    </div>
  )
}

export default TodoItem
