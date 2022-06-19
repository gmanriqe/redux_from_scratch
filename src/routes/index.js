// 1ero: Paquetes de terceros
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 2do: Mis paquetes
import Home from '../views/Home';
import Results from '../views/Results'
import Detail from '../views/Detail'

const RoutesComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/results/:title" element={<Results />} />
            <Route path="/detail" element={<Detail />} />
            
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
)

export default RoutesComponent;