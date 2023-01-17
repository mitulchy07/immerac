import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='center grid gap-5 justify-center content-center my-5'>
      <div className='card w-96  text-primary-content'>
        <Link
          to='/createroom'
          className='btn btn-primary sm:btn-sm md:btn-md lg:btn-lg'
        >
          Create New Reading Room
        </Link>
      </div>
      <div className='card w-96  text-primary-content'>
        <Link className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg'>
          Saved Files
        </Link>
      </div>
    </div>
  );
};

export default Home;
