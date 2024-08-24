import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { todosAdapter } from './todo-slice';

// Selector to get all todos from the EntityState
const selectTodos = todosAdapter.getSelectors<RootState>(
  (state) => state.todos
).selectAll;

// Selector to get the current filter
export const selectFilter = (state: RootState) => state.todos.filter;

// Selector to get filtered todos based on the current filter
export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) =>
    filter === 'all'
      ? todos
      : todos.filter((todo) => todo.completed === (filter === 'completed'))
);
