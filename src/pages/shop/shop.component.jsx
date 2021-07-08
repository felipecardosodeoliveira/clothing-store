import React, { useState } from "react";

import SHOP_DATA from './data';

import CollectionPreview from '../../components/preview-collection/preview-collection.component';

const ShopPage = () => {
    const [collections] = useState(SHOP_DATA);
    return (<div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
            <CollectionPreview
                key={id}
                {...otherProps}
            />
        ))}
    </div>)
}

export default ShopPage;
