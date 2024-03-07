import { addTask } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";
import { ChangeEvent, useState } from "react";
import taskPattern from "utils/taskPattern";

const CreateTaskForm: React.FC = () => {
  const [task, setNewTask] = useState<string>("");
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setNewTask(value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTask(task));
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        onChange={handleInputChange}
        value={task}
        placeholder="create new task..."
      ></input>
      <button disabled={!taskPattern.test(task) || task === ""} type="submit">
        Create
      </button>
    </form>
  );
};

export default CreateTaskForm;
