import React, {useEffect, useState} from 'react';
import Navbar from '../component/nav-bar';
import axios from 'axios';
import DisplayFly from '../component/display-fly';
import {NavLink} from 'react-router-dom';
import {Container, Fab, Grid} from '@mui/material';

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
        <Grid container spacing={3} id='home'>
            <Grid xs={4}><Navbar/></Grid>
            <Grid xs={8}><DisplayFly dataFlyer={dataFlyer}/></Grid>
            <Grid xs={4}><NavLink to='/maquette-avion'><Fab size="large" color="primary" aria-label="add"> + </Fab></NavLink></Grid>
        </Grid>
    );
};
export default Home;
