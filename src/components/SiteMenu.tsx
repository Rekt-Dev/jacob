import React from 'react'
import { Link } from 'react-router-dom'

const SiteMenu=()=>{
    return(
        <div>
             <nav className="menu">

      <ul className="menu-list">

        <li className="menu-item">
          <Link to="/collections">Collections</a>
          </li>
        <li className="menu-item">
          <Link to="/accessories">Accessories</a>
          </li>
        <li className="menu-item">
          <Link to="/accessories">HardGoods</a>
          </li>

      </ul>
    </nav>
        </div>
    )
} 
export default SiteMenu;


