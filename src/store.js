import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  todos: [
    "hallo",
    "i bims",
    "1 todo"
  ]
}

const reducer = (state = initialState, action) => {
  if (action.type === 'NOTIFICATION') {
    console.log(action.payload)
  }

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

const loggingMiddleware = store => next => action => {
  console.dir(store.getState())
  console.log(`${action.type} with payload "${action.payload}`)

  next(action)

  console.dir(store.getState())
}

const middleware = [thunk, loggingMiddleware]

const store = createStore(reducer, applyMiddleware(...middleware))

export default store
