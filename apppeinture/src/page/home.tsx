import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayFly from '../component/display-fly';
import {Typography} from '@mui/material';

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
            <Typography variant='h1' sx={{marginLeft: 80, marginTop: 4}}> Appplication Pot de Peinture</Typography>
            <DisplayFly dataFlyer={dataFlyer}/>
        </>
    )
}
export default Home;
