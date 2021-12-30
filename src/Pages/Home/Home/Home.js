import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../../Contact/Contact';
import { admin } from '../../redux/action/productAction';
import NavigationBar from '../../Shared/Header/NavigationBar';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Products from '../Products/Products';

const Home = () => {
    const [allUser, setAllUser] = useState([])
    const dispatch = useDispatch()
    const user = useSelector(state => state.products.user)
    useEffect(() => {

        fetch(`https://arcane-earth-75147.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => {
                setAllUser(data)
                const sameUser = allUser.find(a => a?.email === user?.email)
                if (sameUser) {
                    dispatch(admin(sameUser))
                }

            })
    }, [user?.email,allUser,dispatch])
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Products></Products>
            <Discount></Discount>
            <Contact></Contact>
        </div>
    );
};

export default Home;