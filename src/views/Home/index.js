import Chair from '../../assets/images/search.png'

import { useState } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    // event.target.value ===> { target: { value } } (utilizando destructuring)
    const handlerInputChange = ({ target: { value } }) => {
        setSearch(value)
    }

    const handlerCleanClick = () => {
        setSearch('')
    }

    const handlerSearchClick = () => {
        // navegar a la siguiente vista
        // Hook para navegar entre los descendientes de una ruta
        navigate(`/results/${search.trim()}`)
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <figure className="w-2/5">
                <img src={Chair} className="h-screen w-full object-cover" alt="chair" />
            </figure>
            <div className="w-3/5 flex items-center">
                <div className="w-full px-10">
                    <h2 className="font-bold text-3xl font-lato">Busca tu película</h2>
                    <input
                        type="text"
                        className="bg-special-gray font-lato w-full my-3 h-9 p-2 border focus:outline-none focus:ring-2 rounded"
                        value={search}
                        onChange={handlerInputChange}
                    />
                    <div>
                        <button 
                            className="bg-rose hover:bg-rose-800 text-white font-lato w-full shadown-lg h-9 mb-2 rounded"
                            onClick={handlerSearchClick}>
                                Buscar</button>
                        <button 
                            className="bg-black text-white font-lato w-full shadown-lg h-9 rounded"
                            onClick={handlerCleanClick}>
                                Limpiar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home