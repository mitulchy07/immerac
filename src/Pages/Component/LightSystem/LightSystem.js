import React from 'react';

const LightSystem = () => {
  return (
    <div className='my-5 '>
      <div className='center card w-50vw shadow-xl grid justify-center m-5'>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Number of lights in the front:</span>
            </label>
            <label className='input-group'>
              <input
                type='text'
                placeholder='1'
                className='input input-bordered'
              />
              <span>lights</span>
            </label>
          </div>
        </div>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Number of lights in the back:</span>
            </label>
            <label className='input-group'>
              <input
                type='text'
                placeholder='1'
                className='input input-bordered'
              />
              <span>lights</span>
            </label>
          </div>
        </div>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>
                Number of lights in the right side:
              </span>
            </label>
            <label className='input-group'>
              <input
                type='text'
                placeholder='1'
                className='input input-bordered'
              />
              <span>lights</span>
            </label>
          </div>
        </div>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>
                Number of lights in the left side:
              </span>
            </label>
            <label className='input-group'>
              <input
                type='text'
                placeholder='1'
                className='input input-bordered'
              />
              <span>lights</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightSystem;
