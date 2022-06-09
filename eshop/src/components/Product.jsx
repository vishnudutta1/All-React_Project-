import React from 'react';

import Rating from '@mui/material/Rating';


import './Product.css'

function Product({id,title,Image,Price,Rating}) {
  return (
    <div className="product">

        <div className="product_info">
            <p className="title">{title}</p>
            <p className="product_price">{Price}</p>
            <div className="product_rating">
              {<Rating/>}
            </div>
        </div>

        <img src={Image} alt="Product-image" />
        <button>Add to Basket</button>
    </div>
  )
}

export default Product