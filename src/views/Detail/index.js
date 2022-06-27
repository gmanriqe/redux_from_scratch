import { useEffect } from "react"
import { useParams } from "react-router-dom"

// useDispatch --> para disparar acciones
// useSelector --> para obtener el estado actual
import { useDispatch, useSelector } from "react-redux"

import { fetchMovieRatings, fetchMovieDetail } from "../../redux/actions/movies"

import LeftContainer from "./components/LeftContainer"
import RightContainer from "./components/RightContainer"
// const Details = () => <div>Detail</div>
const Details = () => {
    const dispatch = useDispatch() // alistamos a nuestros componentes a la acción
    const { movieId } = useParams()
    const {
        // isFetchingMovieRatings,
        // isFetchingMovieDetail,
        // isLoading,
        // errorFetchingMovieRatings,
        // errorFetchingMovieDetail,
        // successFetchingMovieRatings,
        // successFetchingMovieDetail,
        ratings,
        movieDetail
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

    // return <div>Detail</div>
    return (
        <div className="flex flex-row items-center justify-center px-16 h-screen">
            <LeftContainer
                imageUrl={movieDetail?.overviewTitle?.results?.primaryImage?.url}
            />
            <RightContainer
                movieTitle={movieDetail?.overviewTitle?.results?.primaryImage?.caption?.plainText}
                movieRating={ratings?.data?.results?.averageRating}
            />
        </div>
    )
}
export default Details