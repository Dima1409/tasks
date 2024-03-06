import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Task } from "utils/types";

const taskInitialState: Task[] = 
  [
    { id: "0", text: "First task", completed: false },
    { id: "1", text: "Second task", completed: false },
    { id: "2", text: "Third task", completed: false },
    { id: "3", text: "Fourth task", completed: false },
  ]


const tasksSlice = createSlice({
  name: "tasks",
  initialState: taskInitialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.push(action.payload);
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
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;