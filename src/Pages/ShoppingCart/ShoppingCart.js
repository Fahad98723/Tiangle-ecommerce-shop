import { Container, Typography } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
    const cart = useSelector((state) => state.products.cart)
    console.log(cart);
    return (
            <Container sx={{py:5}}>
           <div className="heading">
           <Typography variant = 'h2'>
                Shopping Cart
            </Typography>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products Name</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Amount</TableCell>
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
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row?.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           </div>
            </Container>
    );
};

export default ShoppingCart;