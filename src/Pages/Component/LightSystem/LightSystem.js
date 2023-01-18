import React from 'react';

const LightSystem = () => {
  return (
    <div className='my-5 '>
      <div className='card w-50vw shadow-xl grid justify-center m-5'>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Height:</span>
            </label>
            <label className='input-group'>
              <input
                type='text'
                placeholder='1'
                className='input input-bordered'
              />
              <span>meter</span>
            </label>
          </div>
        </div>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Width:</span>
            </label>
            <label className='input-group'>
              <input
                type='text'
                placeholder='1'
                className='input input-bordered'
              />
              <span>meter</span>
            </label>
          </div>
        </div>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Length:</span>
            </label>
            <label className='input-group'>
              <input
                type='text'
                placeholder='1'
                className='input input-bordered'
              />
              <span>meter</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightSystem;
