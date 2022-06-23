import moviesImage from '../../assets/images/into_search.png'

import { useParams } from 'react-router-dom';
import { useFetchMoviesQuery } from '../../redux/api/movies';
import Loading from './components/loading';
import List from './components/List';

const Results = () => {
    const { title } = useParams();
    const { data: movies, isLoading, isSuccess, isFetching, error } = useFetchMoviesQuery(title); //  isLoading = si esta cargando la informacion | isFetching = si esta trayendo la información.

    const renderContent = () => {
        // si ocurre un error, muestro un texto.
        if (error) {
            return (<div className="flex items-center justify-center h-full">
                <p className="text-xl">Hubo un error con la busqueda de tú película.</p>
            </div>)
        }

        // si esta cargando o si está trayendo información (esta haciendo fetching), muestrame el loading; sino no muestres nada.
        if (isLoading || isFetching) {
            return <Loading />
        }

        // si es success y movies.results existe, mostraremos resultados; sino no muestro nada.
        if (isSuccess && movies?.results) {
            return <List data={movies?.results} />
        }
    }
    return (
        <div className="flex flex-row">
            <div className="w-3/5 px-18">
                {renderContent()}
            </div>
            <div className="w-2/5">
                <img src={moviesImage} className="h-screen w-full object-cover" alt="chair" />
            </div>
        </div>
    )
}
export default Results