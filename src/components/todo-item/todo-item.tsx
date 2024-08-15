import React, {  } from 'react';
import { Todo } from '../../types/todo';
import { IconButton, Stack, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import { StyledSpan } from './styled';
import { useTodoItem } from './useTodoItem';

export const TodoItem: React.FC<Todo> = ({ id, text, completed }) => {
  const {
    handleSave,
    handleToggle,
    handleDelete,
    handleEditText,
    isEditing,
    editText,
    startEdit,
  } = useTodoItem({ id, text });

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      {isEditing ? (
        <TextField
          value={editText}
          onChange={handleEditText}
          label="Edit current task"
          variant="outlined"
          fullWidth
        />
      ) : (
        <StyledSpan completed={completed}>{text}</StyledSpan>
      )}
      {isEditing ? (
        <IconButton onClick={handleSave} color="primary">
          <SaveIcon />
        </IconButton>
      ) : (
        <IconButton onClick={startEdit} color="primary">
          <EditIcon />
        </IconButton>
      )}
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};
