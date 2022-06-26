//Reducers: Es una funcion pura que devuelve un valor modificado (modifica el valor de store)
// Recibe 2 parametros: estado actual y actions (actions = objeto que contiene el type y payload)
// Lo mejor es evaluar un SWITCH para cada actions (action.type)
// y devolver el estado actual modificado
// Si no se encuentra el type en el SWITCH, se devuelve el estado actual
import { errorFetchMovieRatings, startFetchMovieRatings, successFetchMovieRatings } from "../actions/movies"

// banderas
const initialState = {
    isFetching: false,
    isLoading: true,
    error: null,
    success: null,
    rating: {}
}
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case startFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: true,
            }
        case successFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                ratings: action.payload.data.results,
                success: true,
                error: null
            }
        case errorFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                ratings: {},
                success: false,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default moviesReducer;