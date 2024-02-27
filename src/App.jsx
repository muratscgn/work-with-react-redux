import { useSelector } from "react-redux"
import CounterButtons from "./components/CounterButtons"
import ShowReduxStoreInfo from "./ShowReduxStoreInfo"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  const value = useSelector(store => store.counter.value)
  const store = useSelector(store => store)
  console.log(value)
  console.log(store)

  return (
    <>
      <h1>App</h1>
      <hr />
      <AddTodo></AddTodo>
      <Todos></Todos>
      <hr />
      <h2>Counter: {value}</h2>
      <CounterButtons></CounterButtons>
      <hr />
      <ShowReduxStoreInfo></ShowReduxStoreInfo>
    </>
  )
}

export default App
