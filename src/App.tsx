import TodoList from "components/TodoList";
import SharedLayout from "components/SharedLayout";
import CreateTaskForm from "components/CreateTaskForm";
import Container from "components/Container";

const App: React.FC = () => {
  return (
    <Container>
      <SharedLayout />
      <CreateTaskForm />
      <TodoList />
    </Container>
  );
};

export default App;
