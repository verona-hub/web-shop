import React from 'react';
import Grid from '@mui/material/Grid';

// Components
import MaterialItem from '../Utility/MaterialItem';
import ItemsInfo from './ItemsInfo';


const Items = () => {
    return (
        <div>
            <Grid container spacing={12} justify='center'>
                {
                    ItemsInfo.map( item => (
                        <Grid item key={item.id} lg={4} md={6} sm={6} xs={12}>
                            <h2>{ item.name }</h2>
                            <h4>{ item.price }</h4>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};


export default Items;
