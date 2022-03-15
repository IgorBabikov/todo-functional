import Header from './component/header/Header';
import AddTodo from './component/addTodo/AddTodo';
import TodoList from './component/todoList/TodoList';
import { useState } from 'react';
import {Container} from 'react-bootstrap'


function App() {

  const [todo, setTodo] = useState([])

  return (
      <Container>
          <Header/>
          <AddTodo todo={todo} setTodo={setTodo}/>
          <TodoList todo={todo} setTodo={setTodo}/>
      </Container>
    );
}

export default App;
