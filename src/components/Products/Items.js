import React from 'react';

// Components
import ItemsData from './ItemsData';
import Item from './Item';


const Items = ({ addToCart }) => {

    return (
        <main className='Items'>
            {
                ItemsData.map(item => (
                        <Item
                            addToCart={addToCart}
                            item={item}
                            key={item.id}
                        />
                ))
            }
        </main>
    );
};


export default Items;
