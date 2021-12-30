import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';
import { deleteFromCart, updateCart } from '../redux/action/productAction';
import { Link } from 'react-router-dom';
const ShoppingCartDrawer = ({setState,state}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.products.cart)
    const updatingCart = useSelector((state) => state.products.updateCart)
    
    cart?.forEach(c => {
        c.totalAmount = c.quantity * c.price
    });
    let grandTotalAmount = 0
    console.log(cart);
    for(const c of cart){
        grandTotalAmount = grandTotalAmount + c.totalAmount
    }

    const quantityPlus = (id) => {
        const recentProducts = cart?.find(c => c._id === id)
        recentProducts.quantity = recentProducts.quantity + 1
        dispatch(updateCart(cart))
      }
      const quantityMinus = (id) => {
        const recentProducts = cart?.find(c => c._id === id)
        if (recentProducts.quantity > 1) {
          recentProducts.quantity = recentProducts.quantity - 1
        } 
        dispatch(updateCart(cart))
      }
    const list =  (
        <Box
          sx={{ width:300 , p:1}}
          role="presentation"
          style={{
            fontFamily: 'Poppins, sans-serif', 
            textDecoration : 'none'
          }}
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box>
            <div className="cart-details m-2">
                <h2>Your Shopping Cart</h2>   
            </div>
            <div  style={{height:'300px', overflowY:'scroll'}}  className="cart-items px-2">
                {
                    cart?.map(c =>
                        <Grid container sx={{my:2 , alignItems:'center'}}>
                            <Grid item  xs={3}>
                                <img style={{height : '80px', width:'100%' , borderRadius : '50%' }}  src={c.img} alt="" />
                            </Grid>
                            <Grid item sx={{p:1}}  xs={9}>
                                <div className="name d-flex justify-content-between align-content-center">
                                    <p>{c.name}</p>
                                    <i onClick={() => dispatch(deleteFromCart(c._id))} className="fs-5 far fa-times-circle"></i>
                                </div>
                                <div className="d-flex justify-content-between align-content-center">
                                <div className="count">
                                <i onClick={() => quantityMinus(c._id)} className="fas fs-5 fw-bold fa-minus text-danger"></i>

                                {/* <input style={{width : '40px', fontSize:'20px'}} className= 'mb-3 py-1 rounded border-0 text-center' type="number" min='0' name="" readOnly value= {count} id="" /> */}

                                <span className=' fs-5 mx-2 fw-bold mx-1'>{c?.quantity}</span>

                                <i onClick={() => quantityPlus(c._id)} className="fas fs-5 fw-bold fa-plus text-danger"></i>
                                </div>
                                    <p>${c.price}</p>
                                </div>
                            </Grid>
                        </Grid>)
                }
            </div>  
            <div className="total d-flex justify-content-between my-3">
                <h4>SubTotal : </h4>    
                <h4>$ {grandTotalAmount ? grandTotalAmount : 0}</h4>    
            </div>   
            <div className="button">
                <Link to='/shoppingCart' className="btn btn-danger w-100 py-2 mb-3">View Cart</Link>
                <button onClick={() => setState(false)} className="btn btn-danger w-100 py-2">Continue Shopping</button>
            </div>
            </Box>
        </Box>
      );
    return (
        <div>
            <div>
            <React.Fragment >
            <SwipeableDrawer
                open={state}
                onClose={() => setState(false)}
                anchor="right"
            >
                {list}
            </SwipeableDrawer>
            </React.Fragment>
        </div>
        </div>
    );
};

export default ShoppingCartDrawer;