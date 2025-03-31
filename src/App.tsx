import "./App.css"
import { Counter } from "./features/counter/Counter"
import Fetch from "./features/fetch/Fetch"
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
        <Fetch />
        {/* <Quotes /> */}
      </header>
    </div>
  )
}

export default App
