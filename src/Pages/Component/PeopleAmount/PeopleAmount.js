import React from 'react';

const PeopleAmount = ({ formData, setFormData }) => {
  return (
    <div className='my-5 '>
      <div className='center card w-50vw shadow-xl grid justify-center m-5'>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>
                How many people do you want in the room?
              </span>
            </label>
            <label className='input-group'>
              <input
                type='text'
                placeholder='1'
                className='input input-bordered'
                onChange={(event) =>
                  setFormData({ ...formData, pAmount: event.target.value })
                }
                value={
                  formData.pAmount > 0
                    ? formData.pAmount
                    : () => {
                        window.alart('Please enter a positive value');
                      }
                }
              />
              <span>People</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleAmount;
