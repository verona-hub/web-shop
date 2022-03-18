import React from 'react';
import Grid from '@mui/material/Grid';

// Components
import MaterialItem from '../Utility/MaterialItem';
import ItemsInfo from './ItemsInfo';

console.log(ItemsInfo)

const Items = () => {
    return (
        <div>
            <Grid container spacing={4} justify='center'>
                <Grid item xs={4}>
                    <MaterialItem> Product 1 </MaterialItem>
                </Grid>
                <Grid item xs={4}>
                    <MaterialItem> Product 2 </MaterialItem>
                </Grid>
                <Grid item xs={4}>
                    <MaterialItem> Product 3 </MaterialItem>
                </Grid>
                <Grid item xs={4}>
                    <MaterialItem> Product 4 </MaterialItem>
                </Grid>
                <Grid item xs={4}>
                    <MaterialItem> Product 5 </MaterialItem>
                </Grid>
            </Grid>
        </div>
    );
};


export default Items;
