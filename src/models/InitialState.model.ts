export interface todo {
  completed: boolean,
  todo: string,
  description: string,
  priority: 'Hight' | 'Medium' | 'Low' | null
}

export interface TodoSlice {
  textInput: string,
  todos: todo[],
  todo: todo
  todoSelected: todo
}

export interface uiSliceI {
  showModalCreate: boolean,
  showModalTodoDetail: boolean,
  importancySelected: 'Hight' | 'Medium' | 'Low' | 'All'
  errorsAddTodo: errors[]
}

export interface errors {
  Type:string, error:boolean
}