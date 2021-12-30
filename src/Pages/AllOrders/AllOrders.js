import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavigationBar from '../Shared/Header/NavigationBar';

const AllOrders = () => {
    const user = useSelector(state => state.products.user)
    const [allOrder, setAllOrder] = useState([])
    console.log(user.email);
    useEffect(() => {
        fetch(`https://arcane-earth-75147.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => setAllOrder(data))
    },[user.email, setAllOrder])
    console.log(allOrder);
    const handleDelete  = id => {
        // const confirm = window.confirm("Are You Sure You Want To Cancel ?")
        console.log(id);
        // if (confirm) {
            fetch(`https://arcane-earth-75147.herokuapp.com/orders/${id}`,{
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            // if (data.deletedCount) {
            //     alert('Order Cancel Successfully')
                const remaining = allOrder.filter(order => order._id !== id)
                setAllOrder(remaining)

            // }
            console.log(data);
        })
        // }
        
    }
    // const handleUpdate = id => {
    //     const data = allOrder.find(order => order._id === id)
    //     const dataUpdate = {...data}
    //     console.log(dataUpdate);
    //     dataUpdate.status = 'Delivered'
    //     fetch(`https://arcane-earth-75147.herokuapp.com/orders/${id}`,{
    //         method : "PUT",
    //         headers : {
    //             'content-type' : 'application/json'
    //         },
    //         body : JSON.stringify(dataUpdate)
    //     })
    // }
    return (
        <>
        <NavigationBar></NavigationBar>
        <Container >
            <div className="py-5">
            {
                allOrder?.map(my => 
                    <div className='mb-5'>
                        <h5>Order By <span className='text-warning'>{my.name}</span></h5>
                        <h5>Contact Email <span className='text-warning'>{my.email}</span></h5>
                        <Table striped bordered  className='text-center text-white bg-danger'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Product Qunatity</th>
                        <th>Price</th>
                        <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {my?.cart?.map(m => 
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
                        my?.transaction && my?.last4 ? <button className=" btn btn-warning">Paid</button> : <button className="btn btn-warning">Not Payed</button>
                    }
                    <button onClick={() => handleDelete(my._id)} className="mx-3  btn btn-warning">Delete From All  Order</button>
                    {/* {
                        my.status === 'Pending' ? <button onClick={() => handleUpdate(my._id)} className='btn btn-warning'>
                            Delivery Processing
                        </button> :  <button className='btn btn-success'>
                            Delivered
                        </button>
                    } */}
                    </div>
                    </div>
                )
            }
            </div>
        </Container>
        </>
        
    );
};

export default AllOrders;