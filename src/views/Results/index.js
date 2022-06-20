import moviesImage from '../../assets/images/into_search.png'

import { useParams } from 'react-router-dom';
import {useFetchMoviesQuery} from '../../redux/api/movies';
import Loading from './components/loading';
import List from './components/List';

const Results = () => {
    const { title } = useParams();
    const { data: movies, isLoading, isSuccess, isFetching, error } = useFetchMoviesQuery(title);

    console.log(movies)
    return (
        <div className="flex flex-row">
            <div className="w-3/5 px-18">
                {/* si esta cargando  y también esta haciendo fetching, entonces que me muestre el <Loading/> */}
                {isLoading && isFetching ? <Loading /> : <List data={movies?.results}/>}
            </div>
            <div className="w-2/5">
                <img src={moviesImage} className="h-screen w-full object-cover" alt="chair" />
            </div>
        </div>
    )
}
export default Results