import React from 'react';
import '../App.css';
import Cart from './Cart'
import Currency from './Currency'
import User from './User'
import UserMenu from './UserMenu';
import Item from './Item';
import  '../styles.css';
import Header from './Header';

function App() {
  return (<>  

<div className='Header '>
<Header />
</div>
     <div className=' flex-container  '>
      
  
<div className='flex-item '>
      <Item />
</div> 

</div>
    </>
  );
}

export default App;
