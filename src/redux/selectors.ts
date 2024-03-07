import { Task, TasksState, FiltersState, Filter } from "../utils/types";

const selectTasks = (state: TasksState): Task[] => state.tasks;
const selectStatus = (state: FiltersState): Filter => state.filter;

export { selectTasks, selectStatus };
