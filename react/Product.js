import React from 'react'
import PropTypes from 'prop-types'

import ProductImage from './ProductImage'
import ProductPrice from './ProductPrice'

const Product = ({ productInfo }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <ProductImage
        url={productInfo.imageUrl}
        alt={productInfo.name}
        className="w3 mr5"
      />
      <p href={productInfo.detailUrl} className="t-body" target="_blank">
        {productInfo.name} <br />
        <small className="t-mini">
          {productInfo.quantity} {productInfo.measurementUnit}
        </small>
      </p>
    </div>
    <ProductPrice value={productInfo.price * productInfo.quantity} currency="BRL" />
  </div>
)

Product.propTypes = {
  productInfo: PropTypes.object.isRequired,
}

export default Product
