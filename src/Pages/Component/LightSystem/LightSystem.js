import React from 'react';

const LightSystem = ({ formData, setFormData }) => {
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
                onChange={(event) =>
                  setFormData({ ...formData, frontLight: event.target.value })
                }
                value={
                  formData.frontLight > 0
                    ? formData.frontLight
                    : () => {
                        window.alart('Please enter a positive value');
                      }
                }
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
                onChange={(event) =>
                  setFormData({ ...formData, backLight: event.target.value })
                }
                value={
                  formData.backLight > 0
                    ? formData.backLight
                    : () => {
                        window.alart('Please enter a positive value');
                      }
                }
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
                onChange={(event) =>
                  setFormData({ ...formData, rightLight: event.target.value })
                }
                value={
                  formData.rightLight > 0
                    ? formData.rightLight
                    : () => {
                        window.alart('Please enter a positive value');
                      }
                }
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
                onChange={(event) =>
                  setFormData({ ...formData, leftLight: event.target.value })
                }
                value={
                  formData.leftLight > 0
                    ? formData.leftLight
                    : () => {
                        window.alart('Please enter a positive value');
                      }
                }
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
