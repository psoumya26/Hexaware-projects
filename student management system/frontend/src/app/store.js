import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { candidateProfileApi } from '../components/candidateProfileApi'

export const store = configureStore({
  reducer: {
    [candidateProfileApi.reducerPath]: candidateProfileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(candidateProfileApi.middleware),
})

setupListeners(store.dispatch)