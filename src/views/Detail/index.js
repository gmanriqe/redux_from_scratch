import { useEffect } from "react"
import { useParams } from "react-router-dom"

// useDispatch --> para disparar acciones
// useSelector --> para obtener el estado actual
import { useDispatch, useSelector } from "react-redux"

import { fetchMovieRatings, fetchMovieDetail } from "../../redux/actions/movies"

import LeftContainer from "./components/LeftContainer"
import RightContainer from "./components/RightContainer"

import Loading from "../../components/Loading"
// const Details = () => <div>Detail</div>
const Details = () => {
    const dispatch = useDispatch() // alistamos a nuestros componentes a la acción
    const { movieId } = useParams()
    const {
        isFetchingMovieRatings,
        isFetchingMovieDetail,
        isLoading,
        errorFetchingMovieRatings,
        errorFetchingMovieDetail,
        // successFetchingMovieRatings,
        // successFetchingMovieDetail,
        ratings,
        movieDetail
    } = useSelector((state) => state.moviesReducerSlice) // alistamos a nuestros componentes al cambio de estado

    const state = useSelector((state) => state)
    console.log(state)

    // un useEffect por cada thunk
    useEffect(() => {
        dispatch(fetchMovieRatings(movieId)) // dispara (dispatch) la action cuando el componente se monte
    }, [dispatch, movieId]) // solo se ejecuta cuando movieId cambie

    // un useEffect por cada thunk
    useEffect(() => {
        dispatch(fetchMovieDetail(movieId)) // dispara (dispatch) la action cuando el componente se monte
    }, [dispatch, movieId]) // solo se ejecuta cuando movieId cambie

    const renderContent = () => {
        if (isLoading || isFetchingMovieRatings || isFetchingMovieDetail) {
            return <Loading message="obteniendo información de la película..." />
        } else if (errorFetchingMovieDetail || errorFetchingMovieRatings) {
            return <p>Ha ocurrido un error al obtener la informacion de la pelicula</p>
        }

        return (
            <>
                <LeftContainer
                    imageUrl={movieDetail.overviewTitle.results.primaryImage?.url}
                />
                <RightContainer
                    movieTitle={movieDetail.overviewTitle.results.primaryImage?.caption?.plainText ?? 'SIN TITULO (No disponible)'}
                    movieRating={ratings.data.results?.averageRating ?? 'Sin rating'}
                />
            </>
        )
    }

    return (
        <div className="flex flex-row items-center justify-center px-16 h-screen">
            {renderContent()}
        </div>
    )
}
export default Details