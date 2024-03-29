export interface Task {
  id: string
  text: string
  completed: boolean
}

export interface TasksState {
  tasks: Task[]
}

export default interface Filter {
  filter: string
}

export interface FiltersState {
  filter: Filter
}
