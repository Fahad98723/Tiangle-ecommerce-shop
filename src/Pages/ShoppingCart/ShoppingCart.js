import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { productMinus, productPlus, updateCart, productsAddToCart } from '../redux/action/productAction';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {

    // const dispatch = useDispatch()
    // const count = useSelector((state) => state.products.count)
    
    const [city, setCity] = useState('')
    const [shipping, setShipping] = useState(0)

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.products.cart)
    const updatingCart = useSelector((state) => state.products.updateCart)
    console.log(cart);

    const quantityPlus = (id) => {
      const recentProducts = cart.find(c => c._id === id)
      recentProducts.quantity = recentProducts.quantity + 1
      dispatch(updateCart(cart))
    }
    const quantityMinus = (id) => {
      const recentProducts = cart.find(c => c._id === id)
      if (recentProducts.quantity > 1) {
        recentProducts.quantity = recentProducts.quantity - 1
      }
      
      dispatch(updateCart(cart))
    }

    console.log(updatingCart);
    let grandTotalAmount = 0

    cart.forEach(c => {
      c.totalAmount = c.quantity * c.price
    });
    
    const handleUpdateCart = () => {
      // const productsAmount = cart.forEach(c => {
      //   c.totalAmount = c.quantity * c.price
      // });

      // return productsAmount
    }

    for(const c of cart){
      grandTotalAmount = grandTotalAmount + c.totalAmount
    }
    const cityHandle = e => {
      setCity(e.target.value);
    }
    const chittagong = 'chittagong'
    const shippingSubmit = e => {
      if (cart.length) {
        if (city.toLocaleUpperCase().includes(chittagong.toLocaleUpperCase())) {
          setShipping(60)
        }
        else{
          setShipping(120)
        }
      }
      else{
        return
      }
      e.preventDefault()
    }
    let navigate = useNavigate();
    const handleCheckout = () => {
        cart.grandTotalAmount = grandTotalAmount
        cart.shippingCost = shipping
        cart.totalAmount = cart.shippingCost + cart.grandTotalAmount
        navigate("/checkOut");
    }
    console.log('cart',cart);
    console.log('updatingcart',updatingCart);
    
    return (
            <Container sx={{py:5}}>
           <div className="heading mb-5">
           <Typography variant = 'h2'>
                Shopping Cart
            </Typography>
            </div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products Name</TableCell>
            <TableCell align="left">Unit Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">$ {row.price}</TableCell>
              <TableCell align="left"><div className="count">
                        <i onClick={() => quantityMinus(row._id)} className="fas fs-5 fw-bold fa-minus text-danger me-1"></i>

                        {/* <input style={{width : '40px', fontSize:'20px'}} className= 'mb-3 py-1 rounded border-0 text-center' type="number" min='0' name="" readOnly value= {count} id="" /> */}

                        <span className='fs-4 fw-bold mx-3'>{row.quantity}</span>

                        <i onClick={() => quantityPlus(row._id)} className="fas fs-5 fw-bold fa-plus text-danger"></i>
                        </div></TableCell>
                <TableCell  align="left">$ {!row.totalAmount ? 0 : row.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <button required onClick={handleUpdateCart} className="btn btn-danger mt-5">Update Cart</button>

      <Grid sx={{mt:5}} container spacing={2}>
              <Grid  item xs={12} lg={6}>
                 <Box sx={{border:1,p:3}}>
                  <h3>Get Shipping Estimate</h3>
                  <div className='mt-3'>
                    <form onSubmit={shippingSubmit}>
                    <input className='p-2 w-45 m-2' value={'Bangladesh'} type="text" />
                    <input required placeholder='City Name' onChange={cityHandle} className='p-2 w-45 m-2 ' type="text" />
                    <input required placeholder='Zip Code' className='p-2 m-2  w-25 ' type="number" />
                    <input className='btn btn-danger m-2 ' type="submit" value="Update" />
                    </form>
                  </div>
                 </Box>
              </Grid>
              <Grid  item xs={12} lg={6}>
                    <Box sx={{border:1, p:3}}>
                    <h3>Grand Total</h3>
                    <div>
                      <h4 className='mb-3'>Sub Total : $ {grandTotalAmount ? grandTotalAmount : 0} </h4>
                      <h4 className='mb-3'>Shipping Cost : $ {shipping} </h4>
                      <button onClick={handleCheckout} className="btn btn-danger ">Checkout</button>
                    </div>
                    </Box>
              </Grid>
      </Grid>
            </Container>
    );
};

export default ShoppingCart;