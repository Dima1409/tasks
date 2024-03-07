import TodoList from "components/TodoList";
import SharedLayout from "components/SharedLayout";
import CreateTaskForm from "components/CreateTaskForm";

const App: React.FC = () => {
  return (
    <>
      <SharedLayout />
      <CreateTaskForm />
      <TodoList />
    </>
  );
};

export default App;
