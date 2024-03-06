import { useState, ChangeEvent, FormEvent } from "react";
// import { useDispatch } from "react-redux";
// import { addTask } from "redux/taskSlice";
import TodoList from "components/TodoList";
import SharedLayout from "components/SharedLayout";
// import useTaskSelector from "hooks";

const App: React.FC = () => {
  // const dispatch = useDispatch();
  // const { tasks } = useTaskSelector();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setNewTodo(value);
  };

  const AddTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form);
    // dispatch(addTask(form));
    form.reset();
  };

  return (
    <>
      <SharedLayout />
      <form onSubmit={AddTodo}>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button type="submit">Add todo</button>
      </form>

      {/* <TodoList tasks={tasks} filter="" /> */}
      <TodoList />
    </>
  );
};

export default App;
