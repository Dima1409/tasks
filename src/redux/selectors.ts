import { Task, TasksState, FiltersState } from "../utils/types";

const selectTasks = (state: TasksState): Task[] => state.tasks;
const selectStatus = (state: FiltersState): string => state.status;


export { selectTasks, selectStatus };
