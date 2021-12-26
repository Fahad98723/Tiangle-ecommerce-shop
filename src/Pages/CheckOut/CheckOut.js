import { Container, Grid } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CheckOutForm from './CheckOutForm';

const CheckOut = () => {
    const stripePromise = loadStripe('pk_test_51JvulXJvV51rbiXLiT7KqyFzzGbKHpTris3hucBrpyZHwAkwc6igpO0DQJV5W0jMhZDZT8D8Ty9Y3QLwpJVgj4GA00sqHaRd0p');
    const [totalAmount , setTotalAmount] = useState(0)

    const cart = useSelector((state) => state.products.cart)
    console.log(cart);
    
    console.log('checkout', cart);
    return (
        <div>
            <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                   <div className="details">
                       <h2>Contact : {}</h2>
                       <h2>Ship to : {}</h2>
                   </div>
                   <div className="payment bg-danger">
                       <h2>Payment</h2>
                       <h2>Total Amount : $ {cart.totalAmount}</h2>
                       <Elements stripe={stripePromise}>
                        <CheckOutForm cart={cart}></CheckOutForm>
                        </Elements>
                   </div>
                </Grid>
                <Grid item xs={12} lg={6}>
                    
                </Grid>
        
            </Grid>
            </Container>
        </div>
    );
};

export default CheckOut;