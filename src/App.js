import { Provider, useSelector } from 'react-redux'
import TodoList from './TodoList'
import store from './store'
import './App.css';

const Sidebar = () => {
  const todos = useSelector(state => state.todos)

  return (
    <ul className="sidebar">
      <li>Todos {todos.length}</li>
      <li>Irgendwas anderes</li>
      <li>Noch was</li>
    </ul>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
