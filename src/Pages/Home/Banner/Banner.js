import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import './Banner.css'
const bannerItems = [
    {name : 'Shirt', background : 'https://i.ibb.co/zZ9qP2G/waldemar-brandt-5h-Dqrxz5-Rpc-unsplash.jpg' , stock : '50' , path : 'shirt'},
    {name : 'Pant', background : 'https://i.ibb.co/YPt2zX9/jason-leung-Dm-D8-HVOjy4c-unsplash.jpg' , stock : '50' , path : 'pant'},
    {name : 'T-Shirt', background : 'https://i.ibb.co/Njbdx8J/parker-burchfield-tv-G4-Wvjgs-EY-unsplash.jpg' , stock : '50' , path : 't-shirt'},
    {name : 'Jacket ', background : 'https://i.ibb.co/MMR0LQx/amanda-vick-oh-Wf6-Yuz-OQk-unsplash.jpg' , stock : '50' , path : 'jacket'},
]

const useStyle = makeStyles({
    item : {
        '&:hover': {
            filter : 'grayscale(100%)',
            transform : 'scale(1.1)'
         }
    }
})

const Banner = () => {
    const {item} = useStyle()
    return (
        <div>
            <Grid  container >
                {
                    bannerItems.map(items => <Grid style={{overflow:'hidden'}} item xs={12} md={3}>

                        <div className={item} style={{background : `url(${items.background}) no-repeat center center`, backgroundSize : 'cover', height : '90vh', width : '100%', transition : '1s', display:'flex', alignItems:'center', justifyContent : 'center'
                        }}>
                            <div>
                        <Typography sx={{mb:2}} variant="h1" component="div" gutterBottom>
                        {items.name}
                        </Typography>
                        <Typography variant="h4" component="div" gutterBottom>
                        Stock Items {items.stock}
                        </Typography>
                            </div>

                        </div>   
                    </Grid>)
                }
                
            </Grid>
        </div>
    );
};

export default Banner;