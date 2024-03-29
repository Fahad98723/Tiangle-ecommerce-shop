import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavigationBar from '../Shared/Header/NavigationBar';

const MyOrders = () => {
    const user = useSelector(state => state.products.user)
    
    const [myOrder, setMyOrder] = useState([])
    console.log(user.email);
    useEffect(() => {
        fetch(`https://triangle-ecommerce-server.onrender.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrder(data))
    },[user.email, setMyOrder])
    console.log(myOrder);
    const handleDelete  = id => {
        // const confirm = window.confirm("Are You Sure You Want To Cancel ?")
        console.log(id);
        // if (confirm) {
            fetch(`https://triangle-ecommerce-server.onrender.com/orders/${id}`,{
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            // if (data.deletedCount) {
            //     alert('Order Cancel Successfully')
                const remaining = myOrder.filter(order => order._id !== id)
                setMyOrder(remaining)

            // }
            console.log(data);
        })
        // }
        
    }
    return (
        <>
        <NavigationBar></NavigationBar>
        <Container >
            <div className="py-5">
                <div className="heading mb-5">
                <h1>My Order</h1>
                </div>
            {
                myOrder.map(my => 
                    <div className='mb-5'><Table striped bordered  className='text-center text-white bg-danger'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Product Qunatity</th>
                        <th>Price</th>
                        <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {my.cart.map(m => 
                        <tr>
                        <td>{m.name}</td>
                        <td>{m.quantity}</td>
                        <td>$ {m.price}</td>
                        <td>$ {m.totalAmount}</td>
                        {/* <td>{
                            order.status === 'Pending' ? <button className="btn btn-danger ">{order.status}</button> : <button className="btn btn-success ">{order.status}</button>
                            }
                        </td>
                        <td className="text-center"><i onClick={() => handleDelete(order._id)} className="fas fa-trash-alt"></i></td> */}
                        </tr>
                        )}
                        
                    </tbody>
                    </Table>
                    <div>
                    {
                        my.transaction || my.payment ? <button className=" btn btn-warning">Paid</button> : <Link to={`/checkOut/${my._id}`}><button className="btn btn-warning">Pay Now</button></Link>
                    }
                    <button onClick={() => handleDelete(my._id)} className="ms-3 btn btn-warning">Delete From My Order</button>
                    </div>
                    </div>
                )
            }
            </div>
        </Container>
        </>
        
    );
};

export default MyOrders;