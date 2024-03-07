import useTaskSelector from "hooks/useTasksSelector";

const Counter: React.FC = () => {
  const  tasks  = useTaskSelector();
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { completed: 0, active: 0 }
  );
  return (
    <>
      <p>Active tasks: {count.active}</p>
      <p>Completed tasks: {count.completed}</p>
    </>
  );
};

export default Counter;
