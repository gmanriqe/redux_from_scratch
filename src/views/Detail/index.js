import { useEffect } from "react"
import { useParams } from "react-router-dom"
// useDispatch --> para disparar acciones
// useSelector --> para obtener el estado actual
import { useDispatch } from "react-redux"

import { fetchMovieRatings } from "../../redux/actions/movies"

// const Details = () => <div>Detail</div>
const Details = () => {
    const dispatch = useDispatch() // alistamos a nuestros componentes a la acción
    const { movieId } = useParams()
    
    useEffect(() => {
        dispatch(fetchMovieRatings(movieId)) // dispara (dispatch) la action cuando el componente se monte
    }
    , [dispatch, movieId]) // solo se ejecuta cuando movieId cambie

    return <div>Detail</div>
}
export default Details