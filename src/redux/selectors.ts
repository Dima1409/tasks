import Filter, { TasksState, FiltersState } from "../utils/types";

const selectTasks = (state: TasksState): any => state.tasks;
const selectStatus = (state: FiltersState): Filter => state.filter;

export { selectTasks, selectStatus };
