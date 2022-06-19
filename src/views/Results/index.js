import moviesImage from '../../assets/images/into_search.png'

import { useParams } from 'react-router-dom';
import {useFetchMoviesQuery} from '../../redux/api/movies';
// import { useFetchMoviesQuery } from './../../redux/api/movies';


const Results = () => {
    const { title } = useParams();
    // const { data: movies, loading, isSuccess, isFetching, error } = useFetchMoviesQuery(title);
    const { data  } = useFetchMoviesQuery(title);

    console.log(data)
    return (
        <div className="flex flex-row">
            <div className="w-3/5">

            </div>
            <div className="w-2/5">
                <img src={moviesImage} className="h-screen w-full object-cover" alt="chair" />
            </div>
        </div>
    )
}
export default Results