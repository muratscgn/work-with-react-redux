import { useDispatch } from "react-redux"
import { addMore, increment, reset } from "../store/counter/counterSlice"

export default function CounterButtons() {
  const dispatch = useDispatch()

  return <>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(addMore(10))}>Increment (10)</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
  </>
}