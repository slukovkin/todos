import { useState } from "react"
import "./App.css"
import TodoList from "./components/TodoList/TodoList"

const App = () => {
  const [visible, setVisible] = useState(false)
  const [todos, setTodos] = useState([])
  const message = "Пока нет созданных заддач"
  return (
    <>
      <h2>Welcome to ToDo App</h2>
      <TodoList message={message} todos={[todos, setTodos]} visible={visible} />
    </>
  )
}

export default App
