import React from 'react'

import './Product.css'

function Product() {
  return (
    <div className="product">

        <div className="product_info">
            <p className="title">Title</p>
            <p className="product_price">$30</p>
            <div className="product_rating"></div>
        </div>
    </div>
  )
}

export default Product