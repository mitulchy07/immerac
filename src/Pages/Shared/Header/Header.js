import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/' className='btn btn-ghost  text-5xl m-5'>
        Imm<span className='text-blue-300	'>erse</span>
      </Link>
    </div>
  );
};

export default Header;
