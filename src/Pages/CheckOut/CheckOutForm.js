import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CheckOutForm = ({cart}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('');

    const user = useSelector(state => state.products.user)

    const {totalAmount} = cart
    console.log('totalAmount' , totalAmount);
    useEffect(() => {
      fetch('http://localhost:5000/create-payment-intent', {
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
          setSuccess('')
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
          setSuccess('You successfully payment')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     { processing ?  <CircularProgress> </CircularProgress>:<button type="submit" disabled={!stripe || success}>
        Pay
      </button>}
    </form>
        </div>
    );
};

export default CheckOutForm;