import './App.css'
import TodoForm from './components/TodoForm'
import type { Todo } from "./types/Todo";
import TodoList from './components/TodoList';
import { v4 as uuid } from 'uuid';
import { useLocalStorage } from './hooks/useLocalStorage';


const App: React.FC = () => {

  const [ todos, setTodos ] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuid(),
      text,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];
    console.log("updatedTodos --->", updatedTodos);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleComplete={toggleComplete} />    
    </div>
  );
}

export default App
