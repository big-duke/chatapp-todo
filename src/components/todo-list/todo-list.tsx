import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectFilteredTodos } from '../../store/todo-data/todo-selectors';
import { TodoItem } from '../todo-item/todo-item';
import { Container } from '@mui/material';
import { todoActions } from '../../store/todo-data/todo-slice';

export const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos =  useAppSelector(selectFilteredTodos);
 
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    if (savedTodos.length) {
      dispatch(todoActions.setTodos(savedTodos));
    }
  }, [dispatch]);

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Container>
  );
};
