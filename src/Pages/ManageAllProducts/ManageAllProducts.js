import { CircularProgress, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import NavigationBar from '../Shared/Header/NavigationBar';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]) 


    useEffect(() => {
        fetch('https://triangle-ecommerce-server.onrender.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure you want to delete the product')
            if (confirm) {
                fetch(`https://triangle-ecommerce-server.onrender.com/products/${id}`, {
                method : "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("deleted successfully")
                    const remaining = products.filter(bike => bike._id !== id)
                    setProducts(remaining)
                }
            })
        }
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className='py-5'>
            <div className="heading mb-5">
                    <h3>Remove Those Products Which Are Out Of Stock</h3>
                    <h1>Products Managing</h1>
                </div>
                {
                    Object.keys(products).length === 0 ? <Stack sx={{py:5}} alignItems="center">
                    <CircularProgress />
                    </Stack> :  <Row className ='gy-5'>
                        {
                        products.map(product => <Col lg='3' md='6' sm='12'>
                        <div>
                        <Card style={{ width: '100%',background : 'white',color : 'black',border :'none'  }}>
                            <Card.Img style={{height : '250px'}} variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title className='text-warning fs-4'>{product.name}</Card.Title>
                                <Card.Text>
                                {product.descriptions.slice(0,100)}
                                </Card.Text>
                                <Card.Text>
                                $ {product.price}
                                </Card.Text>
                                <button className="btn btn-danger me-3 ">{product.category}</button>
                                <button onClick= {() => handleDelete(product._id)} className="btn btn-danger">Remove</button>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>)
                        }
                </Row>
                }
               
            </Container>
        </div>
    );
};

export default ManageAllProducts;