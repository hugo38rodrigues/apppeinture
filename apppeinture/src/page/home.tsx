import React from 'react';
import NavBar from "../component/nav-bar";
import PlaneDisplay from "../component/plane-display";


const Home = () => {
    return (
        <div id='home'>
          <p id='hello-home'>Hello Home</p>
            <NavBar/>
            <PlaneDisplay/>
        </div>
    );
};

export default Home;
