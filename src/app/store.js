import { configureStore } from '@reduxjs/toolkit';

import {moviesApi} from '../redux/api/movies';
// importando el reducer de movies
import moviesReducer from '../redux/reducers/movies';

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        moviesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});
