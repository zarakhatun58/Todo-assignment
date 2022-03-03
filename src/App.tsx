import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

import TodoForm from './components/TodoForm/index';
import TodoList from './components/TodoListItem/index';
import TodoListItem from './components/TodoListItem/index';
import TodolList from './components/TodoIList';
import { Grid, List,Typography } from '@mui/material';
import { useStyles } from './components/Home/Styles';
import NewChart from './components/NewChart';
import DaubleChart from './components/DaubleChart';


interface Todo {
  text: string;
  complete: boolean;
  
}
type ToggleTodo = (selectedTodo: Todo) => void;

const todos: Todo[] = [
  {
    text: 'I like the Food',
    complete: false,
  },
  {
    text: 'I love my mother',
    complete: true,
  },
];

const initialTodos: Todo[] = [
  {
    text: 'I like the Food',
    complete: false,
  },
  {
    text: 'I love my mother',
    complete: true,
  },
];


function App() {
  const classes=useStyles();
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };
  
  return (
    <Grid className="App">
       <Header />
       <DaubleChart/>
       <List className={classes.form}>
       <Typography>My Todo List</Typography>
       <TodolList todos={todos} toggleTodo={toggleTodo} />
       <TodoForm addTodo={addTodo}/>
    </List>
     <NewChart/>
     <Footer/>
    </Grid>
    
  );
}

export default App;
