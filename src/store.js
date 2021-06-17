import { createStore } from 'redux'

const initialState = {
  todos: [
    "hallo",
    "i bims",
    "1 todo"
  ]
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_TODO') {
    return {
      ...state,
      todos: [...state.todos, action.payload]
    }
  }

  if (action.type === 'REMOVE_TODO') {
    return {
      ...state,
      todos: state.todos.filter(todo => todo !== action.payload)
    }
  }

  return state
}

const store = createStore(reducer)

export default store
