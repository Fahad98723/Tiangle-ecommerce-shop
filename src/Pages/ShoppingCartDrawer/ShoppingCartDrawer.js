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
import { useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';
const ShoppingCartDrawer = ({setState,state}) => {
const cart = useSelector(state => state.products.cart)

    const list =  (
        <Box
          sx={{ width:300 }}
          role="presentation"
        
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
        >
            <Container>
            <div className="cart-details mb-3">
                <h2>Your Shopping Cart</h2>   
            </div>
            <div  style={{height:'350px', overflowY:'scroll'}}  className="cart-items px-2">
                {
                    cart.map(c =>
                        <Grid container sx={{my:2}}>
                            <Grid item  xs={4}>
                                <img style={{height : '100px', width:'100%'}}  src={c.img} alt="" />
                            </Grid>
                            <Grid item  xs={8}>
                                <div className="name d-flex justify-content-around">
                                    <p>{c.name}</p>
                                    <i className="fs-3 far fa-times-circle"></i>
                                </div>
                                <div className="quantity-price d-flex justify-content-around">
                                    <p>{c.name}</p>
                                    <p>${c.price}</p>
                                </div>
                            </Grid>
                        </Grid>)
                }
            </div>  
            <div className="total d-flex justify-content-around">
                <h2>SubTotal</h2>    
                <h2>SubTotal</h2>    
            </div>   
            <div className="button">
                <button className="btn btn-danger w-100 py-2 mb-3">View Cart</button>
                <button className="btn btn-danger w-100 py-2">Check Out</button>
            </div>
            </Container>
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