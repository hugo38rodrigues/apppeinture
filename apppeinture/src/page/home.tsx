import React, {useEffect, useState} from 'react';
import Navbar from '../component/nav-bar';
import axios from 'axios';
import DisplayFly from "../component/display-fly";

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
        <div>
            <p id="hello-home">Hello Home</p>
            <Navbar/>
            <DisplayFly displayFly={dataFlyer}/>

        </div>
    );
};
export default Home;