import Todo from "components/Todo/Todo";
import useTaskSelector from "hooks/useTasksSelector";
import useFilterSelector from "hooks/useFilterSelectors";
import status from "../../redux/constants";
import { Task } from "utils/types";

const TodoList: React.FC = () => {
  const getVisible = (tasks: Task[], filter: string): Task[] => {
    switch (filter) {
      case status.active:
        return tasks.filter((task) => !task.completed);
      case status.completed:
        return tasks.filter((tasks) => tasks.completed);
      default:
        return tasks;
    }
  };

  const { tasks } = useTaskSelector();
  const { filter } = useFilterSelector();
  const visible = getVisible(tasks, filter);

  return (
    <>
      <ul>
        {visible.map((task) => 
          <Todo
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
          />
        )}
      </ul>
    </>
  );
};

export default TodoList;
