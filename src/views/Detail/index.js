import { useEffect } from "react"
import { useParams } from "react-router-dom"
// useDispatch --> para disparar acciones
// useSelector --> para obtener el estado actual
import { useDispatch, useSelector } from "react-redux"

import { fetchMovieRatings, fetchMovieDetail } from "../../redux/actions/movies"

// const Details = () => <div>Detail</div>
const Details = () => {
    const dispatch = useDispatch() // alistamos a nuestros componentes a la acción
    const { movieId } = useParams()
    const {
        success,
        error,
        isFetching,
        isLoading,
        ratings
    } = useSelector((state) => state.moviesReducer) // alistamos a nuestros componentes al cambio de estado

    // un useEffect por cada thunk
    useEffect(() => {
        dispatch(fetchMovieRatings(movieId)) // dispara (dispatch) la action cuando el componente se monte
    }
        , [dispatch, movieId]) // solo se ejecuta cuando movieId cambie

    // un useEffect por cada thunk
    useEffect(() => {
        dispatch(fetchMovieDetail(movieId)) // dispara (dispatch) la action cuando el componente se monte
    }
        , [dispatch, movieId]) // solo se ejecuta cuando movieId cambie

    return <div>Detail</div>
}
export default Details