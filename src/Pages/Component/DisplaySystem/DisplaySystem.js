import React from 'react';
import tv from '../../../images/tv.png';
import prjector from '../../../images/projector.png';

const DisplaySystem = () => {
  return (
    <div className='center card w-full h-full my-5 shadow-xl '>
      <div className='card-body'>
        <div className='flex justify-around'>
          <div>
            <input
              type='radio'
              name='radio-10'
              className='radio checked:bg-red-500'
              checked
            />
            <img src={tv} alt='' className='w-36' />
          </div>
          <div>
            <input
              type='radio'
              name='radio-10'
              className='radio checked:bg-red-500'
            />
            <img src={prjector} alt='' className='w-36' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplaySystem;
