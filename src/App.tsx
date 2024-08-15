import React from 'react';
import { AddTodoForm } from './components/add-todo-form/add-todo-form';
import { TodoList } from './components/todo-list/todo-list';
import { Container, Stack, Typography } from '@mui/material';
import { Filter } from './components/filter/filter';

export const App: React.FC = () => {
  return (
    <Container>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4" align="center" gutterBottom>
          Todo List
        </Typography>
        <AddTodoForm />
        <Filter />
        <TodoList />
      </Stack>
    </Container>
  );
};
