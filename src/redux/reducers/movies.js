//Reducers: Es una funcion pura que devuelve un valor modificado (modifica el valor de store)
// Recibe 2 parametros: estado actual y actions (actions = objeto que contiene el type y payload)
// Lo mejor es evaluar un SWITCH para cada actions (action.type)
// y devolver el estado actual modificado
// Si no se encuentra el type en el SWITCH, se devuelve el estado actual
import {
    errorFetchMovieRatings,
    startFetchMovieRatings,
    successFetchMovieRatings,
    startFetchMovieDetail,
    successFetchMovieDetail,
    errorFetchMovieDetail
} from "../actions/movies"

// banderas
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
const moviesReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        // thunk fetchMovieRatings
        case startFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: true,
            }
        case successFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: false,
                ratings: action.payload,
                successFetchingMovieRatings: true,
                errorFetchingMovieRatings: null
            }
        case errorFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: false,
                ratings: {},
                successFetchingMovieRatings: false,
                errorFetchingMovieRatings: action.payload.error
            }
        // thunk fetchMovieDetail
        case startFetchMovieDetail.toString():
            return {
                ...state,
                isFetchingMovieDetail: true,
            }
        case successFetchMovieDetail.toString():
            return {
                ...state,
                isFetchingMovieDetail: false,
                movieDetail: {
                    ...action.payload // consume el payload de la action
                },
                successFetchingMovieDetail: true,
                errorFetchingMovieDetail: null
            }
        case errorFetchMovieDetail.toString():
            return {
                ...state,
                isFetchingMovieDetail: false,
                ratings: {},
                successFetchingMovieDetail: false,
                errorFetchingMovieDetail: action.payload.error,
            }
        default:
            return state
    }
}

export default moviesReducer;