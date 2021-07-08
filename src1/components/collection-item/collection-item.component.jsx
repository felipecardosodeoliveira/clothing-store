import React from 'react';

import './collection-item.component.style.scss';

export default function CollectionItem({ id, name, price, imageUrl}) {
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='custom-button'>
                BUY NOW
            </div>
            <div className='collection-footer'>
                <div className='name'>{name}</div>
                <div className='price'>{price}</div>
            </div>
        </div>
    )
}