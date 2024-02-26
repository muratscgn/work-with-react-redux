import { useSelector } from "react-redux"
import CounterButtons from "./components/CounterButtons"

export default function ShowReduxStoreInfo() {
  const value = useSelector(store => store.counter.value)

  return <>
    <h1>Another Component</h1>
    <h3>Counter: {value}</h3>
    <CounterButtons></CounterButtons>
  </>
}