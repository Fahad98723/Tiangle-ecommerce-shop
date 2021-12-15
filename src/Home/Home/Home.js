import React from 'react';
import NavBar from '../../Shared/Header/NavBar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;