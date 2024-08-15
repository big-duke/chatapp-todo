import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Todo, TodoFilter } from '../../types/todo';
import { nanoid } from 'nanoid';
type TodoData = {
  todos: Todo[];
  filter: TodoFilter;
};

export const initialState: TodoData = {
  todos: [],
  filter: 'all',
};

export const todoData = createSlice({
  name: 'todoData',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos =  action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    setFilter: (state, action: PayloadAction<TodoFilter>) => {
      state.filter = action.payload;
    },
  },
});

export const todoActions = todoData.actions;
