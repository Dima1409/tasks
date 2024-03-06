import { useState } from "react";

interface TodoProps {
  text: string
  completed: boolean
}

const Todo: React.FC<TodoProps> = ({ text }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <li style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(): void => setIsCompleted(!isCompleted)}
      />
      {text}
    </li>
  );
};

export default Todo;
