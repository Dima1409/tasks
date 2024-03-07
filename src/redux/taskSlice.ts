import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Task } from "utils/types";

interface TasksState {
  tasks: Task[]
}

const taskInitialState: TasksState = {
  tasks: [
    { id: "0", text: "First task", completed: false },
    { id: "1", text: "Second task", completed: false },
    { id: "2", text: "Third task", completed: false },
    { id: "3", text: "Fourth task", completed: true },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: taskInitialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.tasks.push(action.payload);
      },
      prepare(text: string) {
        return {
          payload: {
            text,
            id: uuidv4(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action: PayloadAction<string>) {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
