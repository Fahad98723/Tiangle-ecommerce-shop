import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';
const AddProducts = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [descriptions, setDescriptions] = useState('')
    const [gender, setGender] = useState('')
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
        // console.log(name);
        // console.log(category);
        // console.log(price);
        // console.log(image);
        fetch('http://localhost:5000/products', {
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
             <form onSubmit={handleSubmit}>
                <TextField placeholder='Products Name' required onChange={e => setName(e.target.value)}  style={{width : '25%', marginBottom:'10px', padding:'10px'}} variant='outlined'/>
                <br />
                <TextField placeholder='Products Categories' required onChange={e => setCategory(e.target.value)} style={{width : '25%', marginBottom:'10px', padding:'10px'}} variant='outlined'/>
                <br />
                <TextField placeholder='Products Price' type='number' required onChange={e => setPrice(e.target.value)} style={{width : '25%', marginBottom:'10px', padding:'10px'}} variant='outlined'/>
                <br />
                
                <TextField placeholder=' Gender'  required onChange={e => setGender(e.target.value)} style={{width : '25%', marginBottom:'10px', padding:'10px'}} variant='outlined'/>
                <br />
                <TextField placeholder='Products Details' required onChange={e => setDescriptions(e.target.value)} style={{width : '25%', marginBottom:'10px', padding:'10px'}} multiline
                rows={10}/>
                <br />
                <input required style={{width : '25%', marginBottom:'10px', padding:'10px'}} onChange={e => setImage(e.target.files[0])} accept="image/*"   type="file" />
                <br />
                <input type="submit" />
            </form>
           
        </div>
    );
};

export default AddProducts;