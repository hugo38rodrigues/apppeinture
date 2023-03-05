import React, {useEffect, useState} from 'react';
import Navbar from '../component/nav-bar';
import axios from 'axios';

interface DataFlyer {
    id: number;
    image: string;
    titre: string;
    alt: string;
}

const Home = () => {
    const [dataFlyer, setDataFlyer] = useState<DataFlyer[]>([]);

    useEffect(() => {
        const getFly = async () => {
            try {
                const response = await axios.get('/data.json');
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
            {dataFlyer.map((item) => (
                <div key={item.id} className="formDisplayFormFlyer">
                    <h2>{item.titre}</h2>
                    <img src={item.image} alt={item.alt}/>
                </div>
            ))}
        </div>
    );
};
export default Home;