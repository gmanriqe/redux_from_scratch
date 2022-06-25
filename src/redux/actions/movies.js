import { createAction } from "@reduxjs/toolkit";

// Definamos a una actions como un endpoint de la API
export const startFetchMovieRatings = createAction('START_FETCH_MOVIE_RATING');
export const successFetchMovieRatings = createAction('SUCCESS_FETCH_MOVIE_RATING');
export const errorFetchMovieRatings = createAction('ERROR_FETCH_MOVIE_RATING');

