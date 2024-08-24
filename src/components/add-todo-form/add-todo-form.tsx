import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { todoActions } from '../../store/todo-data/todo-slice';
import Container from '@mui/material/Container';
import { Box, Button, Stack, TextField } from '@mui/material';

export const AddTodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(todoActions.addTodo(text));
      setText('');
    }
  };

  return (
    <Container>
      <Stack
        component="form"
        direction="row"
        spacing={1}
        onSubmit={handleSubmit}
      
      >
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Add new task"
          variant="outlined"
          fullWidth       
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Stack>
    </Container>
  );
};
