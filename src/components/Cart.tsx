import React from 'react'
import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'
const Cart=()=>{
    return(
        <Link to="/Cart">
        <div>
            <img src={cart} alt="Cart" />
       </div>
       </Link>
    )
} 
export default Cart;


