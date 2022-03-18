import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// Components
import MaterialItem from '../Utility/MaterialItem';
import ItemsInfo from './ItemsInfo';


const Items = () => {

    const addToCart = () => {
        console.log('Added to cart')
    };

    return (
        <div>
            <Grid container spacing={ 12 } justify='center'>
                {
                    ItemsInfo.map(item => (
                        <Grid item key={ item.id } lg={ 6 } md={ 6 } sm={ 6 } xs={ 12 }>
                            <div>
                                <img src={ item.image } alt='product'/>
                            </div>
                            <h2>{ item.name }</h2>
                            <h4>{ item.price }</h4>
                            <Button onClick={addToCart} variant='contained' size='large'> Add to cart </Button>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};


export default Items;
