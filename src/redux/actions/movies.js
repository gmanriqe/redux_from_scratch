import { createAction } from "@reduxjs/toolkit";

import {
    startFetchMovieRatings as startFetchMovieRatingsSlice,
    successFetchMovieRatings as successFetchMovieRatingsSlice,
    errorFetchMovieRatings as errorFetchMovieRatingsSlice,
    startFetchMovieDetail as startFetchMovieDetailSlice,
    successFetchMovieDetail as successFetchMovieDetailSlice,
    errorFetchMovieDetail as errorFetchMovieDetailSlice
} from "../slices/movies";

const BASE_URL = "https://moviesdatabase.p.rapidapi.com";
// const headers = {
//     'X-RapidAPI-Key': 'a80741a64cmshdb76c10f99153bbp1c5354jsn1bd733e8afb1',
//     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// }
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '808b2bfe0cmshf1ddf98813a6c3cp15d125jsn5b0b21510e01',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
}

// Definamos a una actions como un endpoint de la API
export const startFetchMovieRatings = createAction('START_FETCH_MOVIE_RATING');
export const successFetchMovieRatings = createAction('SUCCESS_FETCH_MOVIE_RATING');
export const errorFetchMovieRatings = createAction('ERROR_FETCH_MOVIE_RATING');

// Debemos definir una función exportable
// fetchMovieRatings = thunk
export const fetchMovieRatings = (movieId) => async (dispatch) => { // fetchMovieRatings = middleware
    try {
        // Dentro del try debemos disparar (dispatch) cada una de las actiones definidas anteriormente. Asi el reducer podrá detectar
        // cada uno de los nombres, ejemplo: START_FETCH_MOVIE_RATING, SUCCESS_FETCH_MOVIE_RATING y ERROR_FETCH_MOVIE_RATING
        // y asi pueda actualizar el estado global de store
        // dispatch(startFetchMovieRatings()); // Debemos avisarle al reducer que estamos empezando a obtener los datos
        dispatch(startFetchMovieRatingsSlice());

        // iniciar la llamada al endPoint
        const response = await fetch(`${BASE_URL}/titles/${movieId}/ratings`, options)
        const data = await response.json();

        // dispatch(successFetchMovieRatings({ data }))// Salio exitoso
        dispatch(successFetchMovieRatingsSlice({ data }))
    } catch (error) {
        // dispatch(errorFetchMovieRatings({ error }))
        dispatch(errorFetchMovieRatingsSlice({ error }))
    }
}

export const startFetchMovieDetail = createAction('START_FETCH_MOVIE_DETAIL');
export const successFetchMovieDetail = createAction('SUCCESS_FETCH_MOVIE_DETAIL');
export const errorFetchMovieDetail = createAction('ERROR_FETCH_MOVIE_RATING');

// fetchMovieDetail = thunk
export const fetchMovieDetail = (movieId) => async (dispatch) => {
    try {
        // dispatch(startFetchMovieDetail());
        dispatch(startFetchMovieDetailSlice());

        const overviewDetailtRatingsResponse = await fetch(`${BASE_URL}/titles/${movieId}/ratings`, options)
        const overviewDetailtRatingsData = await overviewDetailtRatingsResponse.json();

        const overviewDetailtTitleResponse = await fetch(`${BASE_URL}/titles/${movieId}`, options)
        const overviewDetailtTitleData = await overviewDetailtTitleResponse.json();

        /*
        dispatch(successFetchMovieDetail({
            overviewRatings: overviewDetailtRatingsData,
            overviewTitle: overviewDetailtTitleData
        }))
        */
        dispatch(successFetchMovieDetailSlice({
            overviewRatings: overviewDetailtRatingsData,
            overviewTitle: overviewDetailtTitleData
        }))
    } catch (error) {
        // dispatch(errorFetchMovieDetail({ error }))
        dispatch(errorFetchMovieDetailSlice({ error }))
    }
}

/*
// Redux saga y Redux thunk (creado por los desarrolladores de redux toolkit)
// Ambos son middleware que se utilizan para realizar peticiones a la API (uso de async/await)
// Redux thunk -> función generadora para el manejo asincrono de las peticiones
*/
