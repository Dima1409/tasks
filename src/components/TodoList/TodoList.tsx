import Todo from "components/Todo/Todo";
import useTaskSelector from "hooks";

const TodoList: React.FC = () => {
  const { tasks } = useTaskSelector();
  return (
    <>
      <ul>
        {tasks.map((task) => 
          <Todo key={task.id} text={task.text} completed={task.completed} />
        )}
      </ul>
    </>
  );
};

export default TodoList;
