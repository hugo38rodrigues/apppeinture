import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './page/home'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Maquette from "./page/maquette";
import Peinture from "./page/peinture";
import Error from "./page/error";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/maquette' element={<Maquette/>}/>
                <Route path='/peinture' element= {<Peinture/>} />
                <Route path='*' element= {<Error/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
