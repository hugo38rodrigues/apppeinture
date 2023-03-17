import React, {useEffect, useState} from 'react';
import Navbar from '../component/nav-bar';
import axios from 'axios';
import DisplayFly from '../component/display-fly';
import {NavLink} from 'react-router-dom';
import {Fab} from '@mui/material';

interface DataFlyer {
    id: number
    image: string
    title: string
    alt: string
}

const Home = () => {
    const [dataFlyer, setDataFlyer] = useState<DataFlyer[]>([]);

    useEffect(() => {
        const getFly = async () => {
            try {
                const response = await axios.get('./data.json');
                const dataFlyer = response.data;
                setDataFlyer(dataFlyer);
            } catch (error) {
                console.log(error);
            }
        };
        getFly();
    }, []);

    return (
        <>
            <div id='Home' className={'home'}>
                <Navbar/>
                <DisplayFly dataFlyer={dataFlyer}/>
                <NavLink to='/maquette-avion'><span className={'add-fly'}><Fab size="large" color="primary" aria-label="add"> + </Fab></span></NavLink>
            </div>
        </>
    )
}
export default Home;
