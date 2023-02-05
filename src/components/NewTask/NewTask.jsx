import cl from "./newtask.module.css"

import { useState } from "react"

const NewTask = ({addTask}) => {
  const [task, setTask] = useState([])
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")


  const submitForm = (evt) => {
    evt.preventDefault()
    const newTask = {
      id: Date.now(),
      title: title,
      content: content
    }
    if(title !== "" && content !== ""){
      addTask(newTask)
      setId("")
      setTitle("")
      setContent("")
    }
  }

  return (
    <>
      <form className={cl.form_task} onSubmit={submitForm}>
        <h2>Новая задача</h2>
        <input
          type='text'
          className={cl.task_title}
          value={title}
          placeholder = "Введите текс заголовка"
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <textarea
          cols='50'
          rows='10'
          className={cl.task_content}
          value={content}
          placeholder = "Введите текс задачи"
          onChange={(evt) => setContent(evt.target.value)}
        ></textarea>
        <button className={cl.btn_submit} type='submit'>
          Создать
        </button>
      </form>
    </>
  )
}

export default NewTask
