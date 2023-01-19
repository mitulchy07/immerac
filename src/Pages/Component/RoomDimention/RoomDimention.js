import React, { useState } from 'react';

const RoomDimention = () => {
  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    // const result = event.target.value.replace(/[-]/, '');
    const re = /^[0-9\b]+$/;

    // setMessage(result);
    if (event.target.value === '' || re.test(event.target.value)) {
      setMessage(event.target.value);
    }
  };

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
                onChange={handleChange}
                value={message}
              />
              <span>meter</span>
              {/* {message <= 0 ? <p>Please enter a positive number</p> : ''} */}
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
                type='number'
                placeholder='1'
                min={0}
                className='input input-bordered'
                value="{path: '/value', type: 'sap.ui.model.type.Integer', constraints:{minimum:0}}"
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
                type='number'
                placeholder='1'
                min={0}
                className='input input-bordered'
                value="{path: '/value', type: 'sap.ui.model.type.Integer', constraints:{minimum:0}}"
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
