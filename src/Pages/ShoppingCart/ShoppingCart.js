import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { productMinus, productPlus } from '../redux/action/productAction';

const ShoppingCart = () => {

    // const dispatch = useDispatch()
    // const count = useSelector((state) => state.products.count)
    const quantityPlus = (id) => {
      const recentProducts = cart.find(c => c._id === id)
      recentProducts.quantity = recentProducts.quantity + 1
      console.log(recentProducts);
    }
    const cart = useSelector((state) => state.products.cart)
    
    console.log(cart);
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
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left"><div className="count">
                        <i onClick={() => quantityPlus(row._id)} className="fas fs-5 fw-bold fa-minus text-danger me-1"></i>

                        {/* <input style={{width : '40px', fontSize:'20px'}} className= 'mb-3 py-1 rounded border-0 text-center' type="number" min='0' name="" readOnly value= {count} id="" /> */}

                        <span className='fs-4 fw-bold mx-3'>{row.quantity}</span>

                        <i onClick={''} className="fas fs-5 fw-bold fa-plus text-danger"></i>
                        </div></TableCell>
              <TableCell align="left">{row?.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <button className="btn btn-danger mt-5">Update Cart</button>

      <Grid sx={{mt:5}} container spacing={2}>
              <Grid  item xs={12} lg={6}>
                 <Box sx={{border:1,p:3}}>
                  <h3>Get Shipping Estimate</h3>
                  <div className='mt-3'>
                    <input className='p-2 w-50 me-3 ' type="text" />
                    <input className='p-2 w-25 ' type="number" />
                  </div>
                 </Box>
              </Grid>
              <Grid  item xs={12} lg={6}>
                    <Box sx={{border:1, p:3}}>
                    <h3>Grand Total</h3>
                    <div>
                      <h4>Sub Total : </h4>
                      <button className="btn btn-danger">Checkout</button>
                    </div>
                    </Box>
              </Grid>
      </Grid>
            </Container>
    );
};

export default ShoppingCart;