import { useSelector } from "react-redux";
import { selectTasks } from "../redux/selectors";
import { Task } from "utils/types";

const useTaskSelector = (): Task[] => {
  const {tasks} = useSelector(selectTasks);
  return  tasks ;
};

export default useTaskSelector;
