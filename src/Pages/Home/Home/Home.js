import React from 'react';
import NavigationBar from '../../Shared/Header/NavigationBar';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Products></Products>
            <Discount></Discount>
        </div>
    );
};

export default Home;