import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/system';
import React from 'react';
import './Banner.css'
const bannerItems = [
    {name : 'Shirt', background : 'https://i.ibb.co/zZ9qP2G/waldemar-brandt-5h-Dqrxz5-Rpc-unsplash.jpg' , stock : '50' , path : 'shirt'},
    {name : 'Pant', background : 'https://i.ibb.co/YPt2zX9/jason-leung-Dm-D8-HVOjy4c-unsplash.jpg' , stock : '50' , path : 'pant'},
    {name : 'T-Shirt', background : 'https://i.ibb.co/Njbdx8J/parker-burchfield-tv-G4-Wvjgs-EY-unsplash.jpg' , stock : '50' , path : 't-shirt'},
    {name : 'Jacket ', background : 'https://i.ibb.co/MMR0LQx/amanda-vick-oh-Wf6-Yuz-OQk-unsplash.jpg' , stock : '50' , path : 'jacket'},
]


const Banner = () => {
    const theme = useTheme()
    const useStyle = makeStyles({
    item : {
        '&:hover': {
            filter : 'grayscale(100%)',
            transform : 'scale(1.1)'
         },
         [theme.breakpoints.down('md')] : {
            height : '35vh!important'
        }
    }
    })
    const {item} = useStyle()
    return (
        <div>
            <Grid  container >
                {
                    bannerItems.map(items => <Grid  style={{overflow:'hidden'}} item xs={6} md={3}>

                        <div className={item} style={{background :  `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)) , url(${items.background}) no-repeat center center`, backgroundSize : 'cover', height : '90vh', width : '100%', transition : '1s', display:'flex', alignItems:'center', justifyContent : 'center'
                        }}>
                            <div className='details'>
                        <h1 className='mb-2'gutterBottom>
                        {items.name}
                        </h1>
                        <h3 gutterBottom>
                        Stock Items {items.stock}
                        </h3>
                            </div>

                        </div>   
                    </Grid>)
                }
                
            </Grid>
        </div>
    );
};

export default Banner;