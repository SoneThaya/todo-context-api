import React, { createContext, useState } from 'react'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    {title: 'Read the book', id: 1},
    {title: 'wash the car', id: 2},
    {title: 'write some code', id: 3},
  ])

  return (
    <TaskListContext.Provider value={{tasks}}>
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider;
