import { useDispatch } from "react-redux";
import { toggleCompleted, deleteTask } from "../../redux/taskSlice";
import { Task } from "utils/types";
import { DeleteIcon } from "components/Icons/Icons";
import { TodoItem, TodoInput, TodoText, ButtonDelete } from "./Todo.styled";
import { theme } from "theme/theme";

const Todo: React.FC<Task> = (task) => {
  const dispatch = useDispatch();
  const handleComplete = (): void => {
    dispatch(toggleCompleted(task.id));
  };
  const handleDelete = (): void => {
    dispatch(deleteTask(task.id));
  };

  return (
    <TodoItem
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
    >
      <TodoInput
        type="checkbox"
        checked={task.completed}
        onChange={handleComplete}
      />
      <TodoText onClick={handleComplete}>{task.text}</TodoText>
      <ButtonDelete onClick={handleDelete}>
        <DeleteIcon color={theme.colors.invalidColor} />
      </ButtonDelete>
    </TodoItem>
  );
};

export default Todo;
