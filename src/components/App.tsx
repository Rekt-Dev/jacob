import React from 'react';
import '../App.css';
import Cart from './Cart'
import Currency from './Currency'
import User from './User'
import UserMenu from './UserMenu';
import Item from './Item';
import  '../styles.css';

function App() {
  return (<>  

    <div className=''>
      <UserMenu />
</div>
     <div className=' flex-container  '>

<div className='flex-item '>
      <Item />
</div> 
<div className='flex-item '>
      <Item />
</div> <div className='flex-item '>
      <Item />
      
</div> <div className='flex-item '>
      <Item />
</div> <div className='flex-item '>
      <Item />
</div> 
<div className='flex-item'>
      <Item />
</div> <div className='flex-item'>
      <Item />
</div> <div className='flex-item'>
      <Item />
</div> <div className='flex-item'>
      <Item />
</div> <div className='flex-item'>
      <Item />
</div> <div className='flex-item'>
      <Item />
</div> <div className='flex-item'>
      <Item />
</div> <div className='flex-item'>
      <Item />
</div> <div className='flex-item'>
      <Item />
</div> <div className='flex-item'>
      <Item />
</div> <div className='flex-item'>
      <Item />
      </div>
</div>
    </>
  );
}

export default App;
