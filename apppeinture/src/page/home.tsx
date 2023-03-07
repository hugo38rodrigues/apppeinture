import React, {useEffect, useState} from 'react';
import Navbar from '../component/nav-bar';
import axios from 'axios';
import DisplayFly from '../component/display-fly';
import {NavLink} from 'react-router-dom';

interface DataFlyer {
    id: number;
    image: string;
    title: string;
    alt: string;
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
        <div className='page'>
            <Navbar/>
            <DisplayFly displayFly={dataFlyer}/>
            <div className='addFly'><span><NavLink to='/maquette-avion'><button >+</button></NavLink></span></div>


        </div>
    );
};
export default Home;
