import React, { Component } from 'react'

import SHOP_DATA from './Shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview'

class ShopPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }

  render () {
    return (
      <div>
        {this.state.collections
          .map(({ id, ...otherCollections }) => (
            <CollectionPreview key={id} {...otherCollections} />
          ))}
      </div>
    )
  }
}

export default ShopPage
