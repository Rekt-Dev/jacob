import React from 'react'
import { Link } from 'react-router-dom'

const SiteMenu=()=>{
    return(
        <div>
             <nav className="menu">

      <ul className="menu-list">

        <li className="menu-item">
          <Link to="/collections">Collections</Link>
          </li>
        <li className="menu-item">
          <Link to="/accessories">Accessories</Link>
          </li>
        <li className="menu-item">
          <Link to="/hardgoods">HardGoods</Link>
          </li>

      </ul>
    </nav>
        </div>
    )
} 
export default SiteMenu;


