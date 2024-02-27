import { useDispatch } from "react-redux"
import { addTodo } from "../store/todo/todoSlice"

export default function AddTodo() {
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    const inputValue = event.target.elements[0].value
    dispatch(addTodo(inputValue))
    event.target.reset()
  }

  return <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Todo Bilgisini Giriniz" />
      <button type="submit" >Add</button>
    </form>
  </>
}