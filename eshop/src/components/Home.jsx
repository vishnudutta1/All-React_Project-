import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">

    <div className="home_container">
        <img src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg" alt="" className='home_image'/>
    </div>

    <div className="home_row">
        <Product/>
        <Product/>
        
    </div>

    <div className="home_row">
        <Product/>
        <Product/>
        <Product/>
    </div>

    <div className="home_row">
        <Product/>
        <Product/>
        
    </div>

    </div>
  )
}

export default Home