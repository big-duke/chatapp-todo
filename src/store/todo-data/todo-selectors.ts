import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

type AppState = Pick<RootState, 'todos'>;

export const getTodos = (state: AppState) => state.todos.todos;
export const getFilter = (state: AppState) => state.todos.filter;
export const getFilteredTodos = createSelector(
  getTodos,
  getFilter,
  (todos, filter) => {
    if (filter === 'all')
    {
        return todos
    }
    return todos.filter(todo => todo.completed === (filter === 'completed'))
  }
);
