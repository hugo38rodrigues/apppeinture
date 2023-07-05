import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayFly from '../component/display-fly';
import {Typography} from '@mui/material';
import NavBar from '../component/nav-bar';

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
        <div className="container-home">
            <nav>
                <NavBar/>
            </nav>
            <article>
                <Typography variant='h1' sx={{marginLeft: 80, marginTop: 4}}> Appplication Pot de Peinture</Typography>
                <DisplayFly dataFlyer={dataFlyer}/>
            </article>
        </div>
    )
}
export default Home;
