import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { taskReducer } from "./taskSlice";
import { filterReducer } from "./filterSlice";

const tasksPersistConfig = {
  key: "tasks",
  storage,
};

const filterPersistConfig = {
  key: "filter",
  storage,
};

const rootReducer = combineReducers({
  tasks: persistReducer(tasksPersistConfig, taskReducer),
  filter: persistReducer(filterPersistConfig, filterReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
