import { Alert, CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartRemove } from '../redux/action/productAction';

const CheckOutForm = ({cart, singlePayment}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('');

    console.log(cart);
    console.log(singlePayment);
    const user = useSelector(state => state.products.user)

    const {_id} = singlePayment


      const totalAmount = singlePayment.totalAmount ? singlePayment.totalAmount : cart.totalAmount


    console.log(totalAmount);
    useEffect(() => {
      fetch('https://arcane-earth-75147.herokuapp.com/create-payment-intent', {
        method : "POST", 
        headers : {
          'content-type' : 'application/json'
        }, 
        body : JSON.stringify({totalAmount})
      })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
    },[totalAmount])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        setProcessing(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type : 'card',
          card
        })
        if (error) {
          console.log(error);
          setError(error.message);
          setSuccess(true)
        }
        else{
          console.log(paymentMethod);
          setError('');
        }

        const {paymentIntent, error : intentError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: user.displayName,
                email : user.email
              },
            },
          },
        );
        if (intentError) {
          setError(intentError.message);
        }
        else{
          console.log(paymentIntent);
          setError('');
          setProcessing(false)
          setSuccess(true)
          const payment = {
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            last4: paymentMethod.card.last4,
            transaction: paymentIntent.client_secret.slice('_secret')[0]
        }
        
        if(!_id){
          const data = {cart, ...payment, email : user.email, name : user.displayName, city : cart?.city , grandTotalAmount : cart?.grandTotalAmount , shippingCost : cart?.shippingCost, totalAmount : cart?.totalAmount, status : 'Pending'}

        const uri = `https://arcane-earth-75147.herokuapp.com/orders`
        fetch(uri, {
          method : 'POST',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(data)
        })
        }
        else{
          const url = `https://arcane-earth-75147.herokuapp.com/orders/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payment)
        })
            .then(res => res.json())
            .then(data => console.log(data));

        }
        }

        
    }

    let navigate = useNavigate()
    const dispatch = useDispatch()
    const handleHome = () => {
        navigate('/home')
        dispatch(cartRemove([]))
    }

    const handlePayLater = () => {
      console.log(cart);
      const data = {cart, email : user.email, name : user.displayName, city : cart?.city , grandTotalAmount : cart?.grandTotalAmount , shippingCost : cart?.shippingCost, totalAmount : cart?.totalAmount, status : 'Pending'}
        const uri = `https://arcane-earth-75147.herokuapp.com/orders`
        fetch(uri, {
          method : 'POST',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(data)
        })
        navigate('/home')
        dispatch(cartRemove([]))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement className='mb-3'
        options={{
          style: {
            base: {
              fontSize: '20px',
              color: 'black',
              '::placeholder': {
                color: 'black',
              },
              backgroundColor:'white',
              padding : '15px 5px',
              lineHeight: '2'
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     { processing ?  <CircularProgress> </CircularProgress>:<button className='btn btn-success' type="submit" disabled={!stripe || success}>
        Pay Now
      </button>}
      {
        success ? <button onClick={() => handleHome()} className='btn btn-warning ms-4'>Home</button> : <button onClick={() => handlePayLater()} className='btn btn-success ms-4'>Pay Later</button>
      }
      {
        success && !error ? <Alert sx={{mt:3}} severity="success">Thank You For Your Payment!</Alert> : ''
      }
      {
        error && <Alert sx={{mt:3}} severity="error">{error} — check it out!</Alert>
      }
    </form>
        </div>
    );
};

export default CheckOutForm;