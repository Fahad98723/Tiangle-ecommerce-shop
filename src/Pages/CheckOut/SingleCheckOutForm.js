import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartRemove } from '../redux/action/productAction';

const SingleCheckOutForm = ({singlePayment}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('');

    const user = useSelector(state => state.products.user)

    const {_id, totalAmount} = singlePayment
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

        const url = `http://localhost:5000/orders/${_id}`;
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

    let navigate = useNavigate()
    const dispatch = useDispatch()
    const handleHome = () => {
        navigate('/home')
        dispatch(cartRemove([]))
    }

    const handlePayLater = () => {
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
              fontSize: '18px',
              color: 'white',
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
      {
        success ? <button onClick={() => handleHome()} className='btn btn-warning ms-4'>Home</button> : <button onClick={() => handlePayLater()} className='btn btn-success ms-4'>Pay Later</button>
      }
    </form>
        </div>
    );
};

export default SingleCheckOutForm;