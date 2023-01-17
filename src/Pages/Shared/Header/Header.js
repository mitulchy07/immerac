import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/' className='btn btn-ghost  text-xl'>
        Immerse
      </Link>
    </div>
  );
};

export default Header;
