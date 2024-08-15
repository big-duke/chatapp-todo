export type Todo  = {
  id: string;
  text: string;
  completed: boolean;
}

export type TodoFilter = 'all' | 'completed' | 'active';  

export type FilterButton = {caption:string, filter: TodoFilter}