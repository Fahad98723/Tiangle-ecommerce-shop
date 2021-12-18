import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Discount = () => {
    const bannerImage = {
        
        padding:'100px 0px'
    }
    return (
        <Container style={bannerImage}  sx={{py:5}}>
            <div className="heading">
                <Typography  variant = 'h2'>
                    Offer
                </Typography>
                <Typography  variant = 'h4'>
                    20% Discount On Our Full Set Item
                </Typography>
            </div>
            <Grid container spacing={2}>
                <Grid  item xs={12} lg={12}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa tenetur at quisquam itaque velit. Deleniti sunt nisi ducimus recusandae sapiente autem! Deserunt exercitationem deleniti aut, nihil commodi voluptas labore?</h2>
                </Grid>
                {/* <Grid item xs={12} lg={6}>
                    
                </Grid>
                <Grid item xs={12} lg={6}>
                    
                </Grid> */}
            </Grid>
        </Container>
    );
};

export default Discount;