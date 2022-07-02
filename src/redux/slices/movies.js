import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetchingMovieRatings: false,
    isFetchingMovieDetail: false,
    isLoading: true,
    errorFetchingMovieRatings: null,
    errorFetchingMovieDetail: null,
    successFetchingMovieRatings: null,
    successFetchingMovieDetail: null,
    ratings: {},
    movieDetail: {}
}

const moviesSlice = createSlice({
    name: 'movie-slice',
    initialState,
    reducers: {
        // 1er action
        startFetchMovieRatings(state, action) {
            state.isLoading = false;
            state.isFetchingMovieRatings = true;
        },
        // 2do action
        successFetchMovieRatings(state, action) {
            state.isLoading = false;
            state.isFetchingMovieRatings = false;
            state.ratings = action.payload;
            state.successFetchingMovieRatings = true;
            state.errorFetchingMovieRatings = null;
        },
        // 3er action
        errorFetchMovieRatings(state, action) {
            state.isLoading = false;
            state.isFetchingMovieRatings = false;
            state.ratings = {};
            state.successFetchingMovieRatings = false;
            state.errorFetchingMovieRatings = action.payload.error;
        },
        // 4to action
        startFetchMovieDetail(state, action) {
            state.isFetchingMovieDetail = true;
        },
        // 5to action
        successFetchMovieDetail(state, action) {
            state.isFetchingMovieDetail = false;
            state.movieDetail = action.payload; // consume el payload de la action
            state.successFetchingMovieDetail = true;
            state.errorFetchingMovieDetail = null;
        },
        // 6to action
        errorFetchMovieDetail(state, action) {
            state.isFetchingMovieDetail = false;
            state.ratings = {};
            state.successFetchingMovieDetail = false;
            state.errorFetchingMovieDetail = action.payload.error;
        }
    }
})

const { actions, reducer } = moviesSlice;

const { 
    startFetchMovieRatings,
    successFetchMovieRatings,
    errorFetchMovieRatings,
    startFetchMovieDetail,
    successFetchMovieDetail,
    errorFetchMovieDetail
 } = actions;

 export {
    startFetchMovieRatings,
    successFetchMovieRatings,
    errorFetchMovieRatings,
    startFetchMovieDetail,
    successFetchMovieDetail,
    errorFetchMovieDetail
 }

export default reducer;