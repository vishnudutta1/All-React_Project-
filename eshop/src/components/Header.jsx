import React from 'react';
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">



<div className="header_logo">
        <LocalGroceryStoreIcon fontSize='large' className='header_logoImage'/>

        <h2 className="header_logoTitle">eShop</h2>
        <input type="text" className="header_searchInput" />
        <SearchIcon className='Search_bar'/>




      </div>

      <div className="header_searchBar">


      </div>

      <div className="header_nav">

        <div className="nav_item">
          <span className="nav_itenLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>

        <div className="nav_item">

          <ShoppingBasketIcon fontSize='large'/>


        </div>

        
      </div>

    </div>
  )
}

export default Header