import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Discount></Discount>
        </div>
    );
};

export default Home;