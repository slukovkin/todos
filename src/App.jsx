import { useState } from "react"
import "./App.css"
import TodoList from "./components/TodoList/TodoList"

const App = () => {
  const [todos, setTodos] = useState([])
  const message = "Пока нет созданных задач"
  return (
    <>
      <h2>Welcome to ToDo App</h2>
      <input className='input_task' type='text' placeholder='Введите задачу' />
      <button className='newTask'>+</button>
      {todos.length !== 0 ? (
        <TodoList todos={todos} />
      ) : (<h4>{message}</h4>)}
    </>
  )
}

export default App
