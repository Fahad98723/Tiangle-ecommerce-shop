import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useProducts from '../../../../Hooks/useProducts';

const T_Shirt = () => {
    const {products} = useProducts()
    const TShirts = products.filter(p => p.category === 'T-shirt')
    
    return (
        <div>
            <Grid container spacing={2}>
                {
                    TShirts.map(tShirt => <Grid item lg={4}>
                        <Card sx={{ maxWidth: '100%' }}>
                        <CardHeader
                          avatar={
                            <Avatar sx={{}} aria-label="recipe">
                              R
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              {/* <MoreVertIcon /> */}
                            </IconButton>
                          }
                          title={tShirt.name}
                          subheader="September 14, 2016"
                        />
                        <CardMedia
                          component="img"
                          height="300"
                          image={`data:image/png;base64 ,${tShirt.img}`}
                          alt="T-shirt"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {tShirt.descriptions}
                          </Typography>
                        </CardContent> 
                        <CardActions>
                        <Button size="small">Learn More</Button>
                        </CardActions>                       
                      </Card>
                    </Grid>)
                }
                
            </Grid>
                
        </div>
    );
};

export default T_Shirt;