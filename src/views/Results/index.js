import moviesImage from '../../assets/images/into_search.png'

import { useParams } from 'react-router-dom';


const Results = () => {
    const { title } = useParams();
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