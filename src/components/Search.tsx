import React from 'react'
import search from '../assets/search.png'
import { Link } from 'react-router-dom';
const Search=()=>{
    return(
        <div>
<Link to = "/Search">
            <img src={search} alt="Search" />
</Link>
        </div>
    )
} 
export default Search;


