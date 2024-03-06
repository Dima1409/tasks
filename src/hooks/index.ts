import { useSelector } from "react-redux";
import { selectTasks } from "../redux/selectors";
import { TasksState } from "utils/types";

const useTaskSelector = (): TasksState => {
  const tasks = useSelector(selectTasks);
  return {
    tasks,
  };
};

export default useTaskSelector;
