import { PayloadAction, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { Todo, TodoFilter } from '../../types/todo';
import { nanoid } from 'nanoid';

// Create an entity adapter for Todo
export const todosAdapter = createEntityAdapter<Todo>();
type TodoData = {
  filter: TodoFilter;
};

// Initialize the state with the adapter's initial state
export const initialState = todosAdapter.getInitialState<TodoData>({
  filter: 'all',
});

export const todoData = createSlice({
  name: 'todoData',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      todosAdapter.setAll(state, action.payload);
    },
    addTodo: (state, action: PayloadAction<string>) => {
      todosAdapter.addOne(state, {
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.entities[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      todosAdapter.removeOne(state, action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      todosAdapter.updateOne(state, {
        id: action.payload.id,
        changes: { text: action.payload.text },
      });
    },
    setFilter: (state, action: PayloadAction<TodoFilter>) => {
      state.filter = action.payload;
    },
  },
});

// Export actions
export const todoActions = todoData.actions;

// Export the selectors generated by the adapter
export const todoSelectors = todosAdapter.getSelectors((state: { todoData: typeof initialState }) => state.todoData);
