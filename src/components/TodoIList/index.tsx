import React from 'react';
import { useStyles } from '../Home/Styles';
import TodoListItem from './../TodoListItem/index';
import { List } from '@mui/material';



interface Todo {
    text: string;
    complete: boolean;
  }
  
  interface Props { 
    todos: Todo[];
    toggleTodo: ToggleTodo;
  }

const TodolList: React.FC<Props> = ({ todos, toggleTodo }) => {
    const classes=useStyles();
    return (
        <>
         <List>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </List>
        </>

    );
};

export default TodolList;