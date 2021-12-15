import { Button, Input } from '@mui/material';
import React from 'react';

const AddProducts = () => {
    return (
        <div>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
        </div>
    );
};

export default AddProducts;