import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import { TaskInput } from "./features/task/TaskInput"
import TaskList from "./features/task/taskList"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TaskInput />
        <TaskList />

        {/* <Quotes /> */}
      </header>
    </div>
  )
}

export default App
