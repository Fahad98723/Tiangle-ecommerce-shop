import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import useProducts from '../../../../Hooks/useProducts';
import QuickViewModal from '../../../Modal/QuickViewModal/QuickViewModal';

const T_Shirt = () => {
    const {products} = useProducts()
    const TShirts = products.filter(p => p.category === 'T-Shirt')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                          // image={`data:image/png;base64 ,${tShirt.img}`}
                          image = {tShirt.img}
                          alt="T-shirt"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {tShirt.descriptions}
                          </Typography>
                        </CardContent> 
                        <CardActions>
                        <button className='btn btn-danger' >Add To Cart <i className="ms-2 fas fa-cart-plus"></i></button>
                        <button onClick={handleOpen} className="btn btn-success">Quick View <i className=" ms-2 fas fa-search-plus"></i> </button>
                        {/* <Link style={{textDecoration:'none', color:'white'}} to={`/`}  className="btn btn-success buy-btn">Buy Now <i className="ms-2 fas fa-arrow-circle-right"></i></Link> */}
                        </CardActions>                       
                      </Card>
                    </Grid>)
                }
                
            </Grid>
            
            <QuickViewModal handleOpen={handleOpen} handleClose={handleClose} open={open}></QuickViewModal>
        </div>
    );
};

export default T_Shirt;