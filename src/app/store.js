import { configureStore } from '@reduxjs/toolkit';

import {moviesApi} from '../redux/api/movies';
// importando el reducer de movies 
import moviesReducer from '../redux/reducers/movies';
// importando el reducer desde el slice de movies
import moviesReducerSlice from '../redux/slices/movies';

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        moviesReducer,
        moviesReducerSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }).concat(moviesApi.middleware),
});
