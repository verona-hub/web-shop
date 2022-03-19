import React from 'react';

// Components
import ItemsData from './ItemsData';
import Item from './Item';


const Items = ({ addToCart }) => {

    return (
        <div className='Items'>
            {
                ItemsData.map(item => (
                        <Item
                            addToCart={addToCart}
                            item={item}
                            key={item.id}
                        />
                ))
            }
        </div>
    );
};


export default Items;
