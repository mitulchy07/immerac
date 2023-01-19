import React from 'react';
import { GrMonitor } from 'react-icons/gr';
import { FcVideoProjector } from 'react-icons/fc';

const DisplaySystem = ({ formData, setFormData }) => {
  const getDisplayDevice = (event) => {
    const target = event.target;

    const name = target.name;
    const value = target.value;
    setFormData({ ...formData, displayDevice: value });
  };

  return (
    <div className='center card w-full h-full my-5 shadow-xl grid justify-center '>
      <div className='card-body'>
        <div>
          <select
            className='select select-bordered w-full max-w-xs'
            onChange={(event) =>
              setFormData({ ...formData, ratio: event.target.value })
            }
            value={
              formData.ratio > 0
                ? formData.ratio
                : () => {
                    window.alart('Please enter a positive value');
                  }
            }
          >
            <option disabled selected>
              Display Ratio?
            </option>
            <option>16:9</option>
            <option>4:3</option>
            <option>21:9</option>
          </select>
        </div>
        <div>
          <select
            className='select select-bordered w-full max-w-xs'
            onChange={(event) =>
              setFormData({ ...formData, dimention: event.target.value })
            }
            value={
              formData.dimention > 0
                ? formData.dimention
                : () => {
                    window.alart('Please enter a positive value');
                  }
            }
          >
            <option disabled selected>
              Dimention?
            </option>
            <option>2D</option>
            <option>3D</option>
          </select>
        </div>

        <div>
          <select
            className='select select-bordered w-full max-w-xs'
            onChange={(event) =>
              setFormData({ ...formData, distance: event.target.value })
            }
            value={
              formData.distance > 0
                ? formData.distance
                : () => {
                    window.alart('Please enter a positive value');
                  }
            }
          >
            <option disabled selected>
              Distance from projector?
            </option>
            <option>5 meters</option>
            <option>10 meters</option>
            <option>15 meters</option>
          </select>
        </div>
        <div className='flex'>
          <div className='flex m-2'>
            <div>
              <input
                type='radio'
                name='displayDevice'
                className='radio'
                onChange={getDisplayDevice}
                value='television'
                checked={formData.displayDevice === 'television'}
              />
            </div>
            <div className='flex'>
              <div className='m-1'>
                <GrMonitor />
              </div>
              <div>
                <span>Television</span>
              </div>
            </div>
          </div>
          <div className='flex m-2'>
            <div>
              <input
                type='radio'
                name='displayDevice'
                className='radio'
                onChange={getDisplayDevice}
                value='projector'
                checked={formData.displayDevice === 'projector'}
              />
            </div>
            <div className='flex'>
              <div className='m-1'>
                <FcVideoProjector />
              </div>
              <div>
                <span>Projector</span>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default DisplaySystem;
