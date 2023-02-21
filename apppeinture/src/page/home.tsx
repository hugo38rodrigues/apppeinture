import React from 'react';
import NavBar from "../component/nav-bar";
import SearchBar from "../component/search-bar";


const Home = () => {
    return (
        <div>
          <p id='hello-home'>Hello Home</p>
            <NavBar/>
            <SearchBar/>
        </div>
    );
};

export default Home;
