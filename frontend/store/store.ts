import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/reducers/rootReducer'; // Ensure this is correctly imported

export const store = configureStore({
  reducer: rootReducer, // Use rootReducer instead of challengesReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
