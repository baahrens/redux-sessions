import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const TodoList = () => {
  const todos2 = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = React.useState("")

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: inputValue })
    setInputValue('')
  }


  const handleInputChange = event => setInputValue(event.target.value)

  const removeTodo = todo => {
    dispatch({ type: 'REMOVE_TODO', payload: todo })
  }

  return (
    <div className="todoList">
      <ul>
        {todos2.map(todo => (
          <div>
            {todo}
            <button onClick={() => removeTodo(todo)}>Remove Todo</button>
          </div>
        ))}
      </ul>
      <input onChange={handleInputChange} value={inputValue} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default TodoList
