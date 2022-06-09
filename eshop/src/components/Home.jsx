import React from 'react';
import './Home.css';
import Product from './Product';
import Rating from '@mui/material/Rating';

function Home() {
  return (
    <div className="home">

    <div className="home_container">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/ATFGW/art-1500x600_2_BS._CB637352283_.jpg" alt="" className='home_image'/>
    </div>

    <div className="home_row">
        <Product
        id = {"12345"}
        title = {"Very Good Bag"}
        Price = {1500}
        Ratings = {5}
        Image = "https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg"/>
        <Product
              id = {"12345"}
              title = {"Very Good pen"}
              Price = {100}
              Ratings = {5}
              Image = "https://https://media.istockphoto.com/photos/pen-picture-id1059543698?s=612x612.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg"/>
        
    </div>

    <div className="home_row">
        <Product 
              id = {"12345"}
              title = {"Very Good pen"}
              Price = {100}
              Rating = {<Rating/>}
              Image = "https://https://media.istockphoto.com/photos/pen-picture-id1059543698?s=612x612.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg"/>
        
   
        <Product 
              id = {"12345"}
              title = {"Very Good pen"}
              Price = {100}
              Ratings = {5}
              Image = "https://https://media.istockphoto.com/photos/pen-picture-id1059543698?s=612x612.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg"/>
        
   
        <Product 
              id = {"12345"}
              title = {"Very Good pen"}
              Price = {100}
              Ratings = {5}
              Image = "https://https://media.istockphoto.com/photos/pen-picture-id1059543698?s=612x612.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg"/>
        
   
    </div>

    <div className="home_row">
        <Product 
              id = {"12345"}
              title = {"Very Good pen"}
              Price = {100}
              Ratings = {5}
              Image = "https://https://media.istockphoto.com/photos/pen-picture-id1059543698?s=612x612.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg"/>
        
   
        <Product 
              id = {"12345"}
              title = {"Very Good pen"}
              Price = {100}
              Ratings = {5}
              Image = "https://https://media.istockphoto.com/photos/pen-picture-id1059543698?s=612x612.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg"/>
        
   
        
    </div>

    </div>
  )
}

export default Home