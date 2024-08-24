import { Button, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectFilter } from '../../store/todo-data/todo-selectors';
import { FilterButton, TodoFilter } from '../../types/todo';
import { todoActions } from '../../store/todo-data/todo-slice';

const buttons: FilterButton[] = [
  { caption: 'All', filter: 'all' },
  { caption: 'Completed', filter: 'completed' },
  { caption: 'Active', filter: 'active' },
];

export const Filter = () => {
  const currentFilter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const handleFilterClick = (filter: TodoFilter) => {
    dispatch(todoActions.setFilter(filter));
  };
  return (
    <Stack direction="row" spacing={2}>
      {buttons.map(({ caption, filter }) => {
        const variant = filter === currentFilter ? 'contained' : 'outlined';
        return (
          <Button
            key={caption}
            variant={variant}
            color="primary"
            onClick={() => handleFilterClick(filter)}
          >
            {caption}
          </Button>
        );
      })}
    </Stack>
  );
};
