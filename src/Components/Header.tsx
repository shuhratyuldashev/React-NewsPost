import React from 'react';
import '../style.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';

const Header: React.FC = () => {
  return (
    <header className='Header'>
      <button className='Search-btn'>
        <IoSearchOutline size={25} className='search-icon'/>
      </button>
      <input placeholder='Search posts...' className='Search-input' type="text" />
      <button className='ShowForum-btn'>
        <AiOutlinePlus className='ShowForum-icon' size={25}/>
        <span>Add</span>
      </button>
    </header>
  );
}

export default Header;
