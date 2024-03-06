import { useDispatch } from "react-redux";
import { toggleCompleted, deleteTask } from "../../redux/taskSlice";
import { Task } from "utils/types";

const Todo: React.FC<Task> = (task) => {
  const dispatch = useDispatch();
  const handleComplete = (): void => {
    dispatch(toggleCompleted(task.id));
  };
  const handleDelete = (): void => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li
      key={task.id}
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleComplete}
      />
      <p>{task.text}</p>
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};

export default Todo;
