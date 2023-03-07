import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Maquette from './page/maquette';
import Peinture from './page/peinture';
import Error from './page/error';
import Home from './page/home';
import AddFly from './page/add-fly';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/maquette' element={<Maquette/>}/>
                <Route path='/peinture' element= {<Peinture/>} />
                <Route path='/maquette-avion' element={<AddFly/>} />
                <Route path='*' element= {<Error/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
