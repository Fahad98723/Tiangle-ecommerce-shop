import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import useProducts from '../../../../Hooks/useProducts';
const Pants = () => {
    const {products} = useProducts()
    const Pants = products.filter(p => p.category === 'Pant')
    return (
        <div>
             <Grid container spacing={2}>
                {
                    Pants.map(pant => <Grid item lg={4}>
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
                          title={pant.name}
                          subheader="September 14, 2016"
                        />
                        <CardMedia
                          component="img"
                          height="300"
                          // image={`data:image/png;base64 ,${tShirt.img}`}
                          image = {pant.img}
                          alt="T-shirt"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {pant.descriptions}
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

export default Pants;