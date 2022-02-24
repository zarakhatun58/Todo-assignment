import React from 'react';
import TodoItem from '../TodoIList/index';
import { Grid, List } from '@mui/material';

interface Todo {
    text: string;
    complete: boolean;
    
}

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
   
}


const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <>
            <Grid>
                <List>
                    <label
                        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
                    >
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onClick={() => {
                                toggleTodo(todo);
                            }}
                        />{' '}
                        {todo.text}
                    </label>
                </List>
            </Grid>
        </>
    );
};

export default TodoListItem;