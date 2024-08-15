import { useState, useEffect } from 'react';
import { text } from 'stream/consumers';
import { useAppDispatch } from '../../hooks/redux';
import { todoActions } from '../../store/todo-data/todo-slice';

type TodoItemControlller = {
  id: string;
  text: string;
};
export const useTodoItem = ({ id, text }: TodoItemControlller) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsEditing(false);
        setEditText(text);
      }
    };

    if (isEditing) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEditing, text]);

  const dispatch = useAppDispatch();
  const handleSave = () => {
    dispatch(todoActions.editTodo({ id, text: editText }));
    setIsEditing(false);
  };
  const handleToggle = () => dispatch(todoActions.toggleTodo(id));
  const handleDelete = () => dispatch(todoActions.deleteTodo(id));
  const handleEditText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEditText(e.target.value);

  return {
    editText,
    handleDelete,
    handleEditText,
    handleSave,
    handleToggle,
    isEditing,
    startEdit: () => setIsEditing(true),
  };
};
