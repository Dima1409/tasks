export interface Task {
  id: string
  text: string
  completed: boolean
}

export interface TasksState {
  tasks: Task[]
}

export interface FiltersState {
  filter: string
}
