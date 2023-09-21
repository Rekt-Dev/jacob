import React from 'react'
import UserLogin from './UserLogin'
import user from '../assets/user.png'
import { Link } from 'react-router-dom';
const User=()=>{
    return(
        <div>
<Link to="/UserLogin">
<img src={user} alt="User" />
</Link>
        </div>
    )
} 
export default User;


