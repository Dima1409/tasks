import useTaskSelector from "hooks/useTasksSelector";
import { CounterDescription } from "./Counter.styled";

const Counter: React.FC = () => {
  const tasks = useTaskSelector();
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
      <CounterDescription>Active tasks: {count.active}</CounterDescription>
      <CounterDescription>
        Completed tasks: {count.completed}
      </CounterDescription>
    </>
  );
};

export default Counter;
