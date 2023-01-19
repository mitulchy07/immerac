import React, { useState } from 'react';

const RoomDimention = ({ formData, setFormData }) => {
  //   const [message, setMessage] = useState('');
  //   const handleChange = (event) => {
  //     setMessage(event.target.value);
  //   };
  //   console.log(formData);
  return (
    <div className='my-5 '>
      <div className='center card w-50vw shadow-xl grid justify-center m-5'>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Height:</span>
            </label>
            <label className='input-group'>
              <input
                type='number'
                placeholder='1'
                min={0}
                className='input input-bordered field'
                defaultValue={1}
                value={
                  formData.height > 0
                    ? formData.height
                    : () => {
                        window.alart('Please enter a positive value');
                      }
                }
                onChange={(event) =>
                  setFormData({ ...formData, height: event.target.value })
                }
              />
              <span>meter</span>
            </label>
            {/* <div>
              {formData.height <= 0
                ? // <p className='text-rose-800'>Please enter a positive number</p>
                  alarm
                : ''}
            </div> */}
          </div>
        </div>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Width:</span>
            </label>
            <label className='input-group'>
              <input
                type='number'
                placeholder='1'
                min={0}
                className='input input-bordered'
                value={
                  formData.width > 0
                    ? formData.width
                    : () => {
                        window.alart('Please enter a positive value');
                      }
                }
                onChange={(event) =>
                  setFormData({ ...formData, width: event.target.value })
                }
              />
              <span>meter</span>
            </label>
            {/* <div>
              {message <= 0 ? (
                <p className='text-rose-800'>Please enter a positive number</p>
              ) : (
                ''
              )}
            </div> */}
          </div>
        </div>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Length:</span>
            </label>
            <label className='input-group'>
              <input
                type='number'
                placeholder='1'
                min={0}
                className='input input-bordered'
                value={
                  formData.length > 0
                    ? formData.length
                    : () => {
                        window.alart('Please enter a positive value');
                      }
                }
                onChange={(event) =>
                  setFormData({ ...formData, length: event.target.value })
                }
              />
              <span>meter</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDimention;
