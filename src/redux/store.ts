import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import postSlice from './post/postSlice'


const rootReducer = combineReducers({
  auth: authReducer,
  blog: postSlice
})

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth", "blog"],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch