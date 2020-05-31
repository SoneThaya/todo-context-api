import React, { createContext, useState } from 'react'
import {v4 as uuid} from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    {title: 'Read the book', id: 1},
    {title: 'wash the car', id: 2},
    {title: 'write some code', id: 3},
  ])

  const addTask = (title) => {
    setTasks([...tasks, {title, id: uuid()}])
  }

  return (
    <TaskListContext.Provider value={{tasks, addTask}}>
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider;
