import { addTask } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";
import { ChangeEvent, useState } from "react";
import taskPattern from "utils/taskPattern";
import {
  Form,
  FormInput,
  FormButton,
  ClearButton,
} from "./CreateTaskForm.styled";
import { ClearIcon } from "components/Icons/Icons";
import { theme } from "theme/theme";

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

  const resetForm = (): void => {
    setNewTask("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="task"
        onChange={handleInputChange}
        value={task}
        placeholder="create new task..."
      ></FormInput>
      <ClearButton disabled={task === ""} type="button" onClick={resetForm}>
        <ClearIcon color={theme.colors.invalidColor} />
      </ClearButton>
      <FormButton
        disabled={!taskPattern.test(task) || task === ""}
        type="submit"
      >
        Create
      </FormButton>
    </Form>
  );
};

export default CreateTaskForm;
