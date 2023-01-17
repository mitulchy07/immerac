import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateRoom = () => {
  const [page, setPage] = useState(0);
  const formTitle = [
    'Number of the people in the room',
    'Set Room Dimention',
    'Set Display System',
    'Set Lighting System',
    'Set Audio System',
  ];
  return (
    <div className='center grid gap-5 justify-center content-center my-5'>
      <div>
        <h1 className='text-3xl'>{formTitle[page]}:</h1>
      </div>
      <div className='flex gap-5'>
        <Link className='btn btn-accent'>Prev</Link>
        <Link className='btn btn-secondary'>Next</Link>
      </div>
    </div>
  );
};

export default CreateRoom;
