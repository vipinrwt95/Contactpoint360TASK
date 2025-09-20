import { configureStore } from '@reduxjs/toolkit'
import calendarReducer from './slices/calendarSlice'
import dataReducer from './slices/dataSlice'

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

export default store