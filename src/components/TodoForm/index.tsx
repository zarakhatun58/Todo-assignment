import { FormGroup } from '@material-ui/core';
import { Button } from '@mui/material';
import React, { useState } from 'react';


interface Props {
    addTodo: AddTodo;
}

const TodoForm: React.FC<Props>= ({ addTodo }) => {

    const [text, setText] = useState('');
    return (
        <>
            <FormGroup>
                <input
                style={{width:"200px", textAlign:"center", margin:"auto"}}
                    type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
                <Button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        addTodo(text);
                        setText('');
                    }}
                >
                    Add Todo
                </Button>
            </FormGroup>
        </>
    );
};

export default TodoForm;
