import React from 'react'
import Cart from './Cart'
import Currecncy from './Currency'
import User from './User'
import Search from './Search'   
import '../styles.css'

const UserMenu=()=>{
    return(
        <div className='menu'>
            <Cart />
            <User />
            <Search />

        </div>
    )
} 
export default UserMenu;


