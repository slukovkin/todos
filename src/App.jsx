import { useEffect, useState } from "react"
import NewTask from "./components/NewTask/NewTask"
import TodoList from "./components/TodoList/TodoList"
import "./App.css"

const App = () => {
  const [visible, setVisible] = useState(false)
  const [todos, setTodos] = useState([])
  const [titleBtn, setTitleBtn] = useState("Создать новую задачу")
  const message = "Пока нет созданных задач"

  useEffect(() => {
    visible ? setTitleBtn("Вернуться к списку задач") : setTitleBtn("Создать новую задачу")
  }, [visible])

  const addTask = (newTask) => {
    if (newTask) {
      setTodos([...todos, newTask])
    }
    setVisible(!visible)
  }

  const showTask = () => {}

  const removeTask = () => {}

  const updateTask = () => {}

  const createNewTask = () => {
    setVisible(!visible)
  }
  return (
    <>
      <h2>Задач в списке {todos.length}</h2>
      <button className='create_task' onClick={createNewTask}>
        {titleBtn}
      </button>
      {visible && <NewTask addTask={addTask} />}
      {todos.length !== 0 && !visible ? (
        <TodoList todos={todos} />
      ) : (
        <h4>{message}</h4>
      )}
    </>
  )
}

export default App
