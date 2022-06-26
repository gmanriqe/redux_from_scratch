import { useEffect } from "react"
import { useParams } from "react-router-dom"

// useDispatch --> para disparar acciones
// useSelector --> para obtener el estado actual
import { useDispatch, useSelector } from "react-redux"

import { fetchMovieRatings, fetchMovieDetail } from "../../redux/actions/movies"
import rating from "../../assets/images/star.png"
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
        successFetchingMovieRatings,
        successFetchingMovieDetail,
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

        console.log(movieDetail)
    // return <div>Detail</div>
    return (
        <div className="flex flex-row items-center justify-center px-16 h-screen">
            <div className="w-1/3 flex justify-center">
                <img src={movieDetail?.overviewTitle?.results?.primaryImage?.url} className="w-80" alt="movie-detail"/>
            </div>
            <div className="w-2/3 flex flex-col items-start justify-center my-16 overflow-y-auto">
                <h2 className="text-4xl font-bold my-1">{`${movieDetail?.overviewTitle?.results?.primaryImage?.caption?.plainText}`}</h2>
                <div className="flex flex-row items-center my-1">
                    <span className="text-xl font-bold w-full">{ratings?.data?.results?.averageRating}</span>
                    <figure>
                        <img src={rating} className="ml-1 w-6 h-6" alt="rating-star"/>
                    </figure>
                </div>
                <p></p>
            </div>
        </div>
    )
}
export default Details