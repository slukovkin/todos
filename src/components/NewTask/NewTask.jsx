// import sl from "./newtask.module.css"

import { useState } from "react"

const NewTask = ({addTask}) => {
  const [task, setTask] = useState([])
  const [id, setId] = useState(Date.now())
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")


  const submitForm = (evt) => {
    evt.preventDefault()
    const newTask = {
      id: Date.now(),
      title: title,
      content: content
    }
    addTask(newTask)
    setId("")
    setTitle("")
    setContent("")
  }

  return (
    <>
      <form className='form_task' onSubmit={submitForm}>
        <h2>Новая задача</h2>
        <input
          type='text'
          className='task_title'
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <textarea
          cols='30'
          rows='10'
          className='task_content'
          value={content}
          onChange={(evt) => setContent(evt.target.value)}
        ></textarea>
        <button className='btn_submit' type='submit'>
          Создать
        </button>
      </form>
    </>
  )
}

export default NewTask
