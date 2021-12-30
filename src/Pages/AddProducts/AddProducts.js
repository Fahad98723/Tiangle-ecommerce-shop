import { Button, Container, Input, TextField } from '@mui/material';
import React, { useState } from 'react';
import NavigationBar from '../Shared/Header/NavigationBar';
import './AddProducts.css'
const AddProducts = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [descriptions, setDescriptions] = useState('')
    const [gender, setGender] = useState('')
    const [img, setImg] = useState('')
    const [image,setImage] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append( 'name', name )
        formData.append( 'category', category )
        formData.append( 'price', price )
        formData.append( 'descriptions', descriptions )
        formData.append( 'image', image )
        formData.append( 'gender', gender )
        formData.append( 'img', img )
        // console.log(name);
        // console.log(category);
        // console.log(price);
        // console.log(image);
        fetch('https://arcane-earth-75147.herokuapp.com/products', {
        method: 'post',
        body: formData
        })
        e.target.reset()
        .then(response => response.json())
        .then(result => {
        console.log('Success:', result);
        })
        .catch(error => {
        console.error('Error:', error);
        });
    };
    
    return (
        <div>
            <NavigationBar></NavigationBar>
             <div className='py-5'>
             <Container>
                 <div className="heading mb-5">
                    <h2>Add New Product</h2>
                 </div>
             <form  onSubmit={handleSubmit}>
                <input   placeholder='Products Name' required onChange={e => setName(e.target.value)}  style={{width : '50%', marginBottom:'20px', padding:'10px'}} variant='outlined'/>
                <br />
                <input placeholder='Products Categories' required onChange={e => setCategory(e.target.value)} style={{width : '50%', marginBottom:'20px', padding:'10px'}} variant='outlined'/>
                <br />
                <input placeholder='Products Price' type='number' required onChange={e => setPrice(e.target.value)} style={{width : '50%', marginBottom:'20px', padding:'10px'}} variant='outlined'/>
                <br />
                <input placeholder=' Gender'  required onChange={e => setGender(e.target.value)} style={{width : '50%', marginBottom:'20px', padding:'10px'}} variant='outlined'/>
                <br />
                <input placeholder='Products Details' required onChange={e => setDescriptions(e.target.value)} style={{width : '50%', marginBottom:'20px', padding:'10px'}} multiline
                rows={10}/>
                <br />
                <input placeholder=' Image Link'  required onChange={e => setImg(e.target.value)} style={{width : '50%', marginBottom:'20px', padding:'10px'}} variant='outlined'/>
                <br />
                {/* <input  style={{width : '25%', marginBottom:'10px', padding:'10px'}} onChange={e => setImage(e.target.files[0])} accept="image/*"   type="file" />
                <br /> */}
                <input className='btn btn-success' type="submit" />
            </form>
             </Container>
             </div>
           
        </div>
    );
};

export default AddProducts;