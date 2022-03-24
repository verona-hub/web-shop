import React, { useContext } from 'react';
// Context
import { MyContext } from "../../Context/MyContext";
// Components
import ItemsData from './ItemsData';
import Item from './Item';


const Items = () => {

    const { addToBasket } = useContext(MyContext);

    return (
        <div className='Items'>
            <MyContext.Provider value={{ addToBasket }}>
                {
                    ItemsData.map(item => (
                        <Item
                            item={ item }
                            key={ item.id }
                        />
                    ))
                }
            </MyContext.Provider>
        </div>
    );
};


export default Items;
