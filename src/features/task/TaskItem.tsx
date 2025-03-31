import React from "react"
import { useAppDispatch } from "../../app/hooks"
import { completeTask, deleteTask, TaskSliceState } from "./taskSlice"

interface TaskProps {
  task: {
    id: number
    title: string
    completed: boolean
  }
}

export const TaskItem = ({ task }: TaskProps) => {
  const dispatch = useAppDispatch()
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => dispatch(completeTask(task))}
        defaultChecked={task.completed}
      />
      <span>{task.title}</span>
      <button onClick={() => dispatch(deleteTask(task))}>DELETE</button>
    </div>
  )
}
