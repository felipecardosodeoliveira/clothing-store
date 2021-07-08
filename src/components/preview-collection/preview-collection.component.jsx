import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.map(item => (
                <CollectionItem key={item.id} {...item} />
            )).slice(0, 4)}
        </div>
    </div>
);

export default CollectionPreview;
