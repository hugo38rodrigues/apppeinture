import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayFly from '../component/display-fly';
import {Box, Typography} from '@mui/material';
import NavBar from '../component/nav-bar/nav-bar';
import AddFly from '../component/add-fly';

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
    }, [dataFlyer]);

    return (
        <div className="container-home">
            <NavBar/>
            <Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography variant='h2' sx={{marginTop: 4, marginBottom: 4}}> Application Pot de
                        Peinture</Typography>
                    <Box sx={{display: 'flex', alignItems: 'flex-end', flexDirection: 'column', paddingRight: 4}}>
                        <DisplayFly dataFlyer={dataFlyer}/>
                        <AddFly/>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
export default Home;
