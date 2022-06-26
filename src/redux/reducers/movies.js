//Reducers: Es una funcion pura que devuelve un valor modificado (modifica el valor de store)
// Recibe 2 parametros: estado actual y actions (actions = objeto que contiene el type y payload)
// Lo mejor es evaluar un SWITCH para cada actions (action.type)
// y devolver el estado actual modificado
// Si no se encuentra el type en el SWITCH, se devuelve el estado actual
import { errorFetchMovieRatings, startFetchMovieRatings, successFetchMovieRatings } from "../actions/movies"

const moviesReducer = (state = {}, action) => {
    console.log(state, action)
    switch (action.type) {
        case startFetchMovieRatings.toString():
            return {
                ...state,
                loading: true
            }
        case successFetchMovieRatings.toString():
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case errorFetchMovieRatings.toString():
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default moviesReducer;