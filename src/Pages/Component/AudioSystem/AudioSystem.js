import React from 'react';
import { BiHeadphone } from 'react-icons/bi';
import { BsFillSpeakerFill } from 'react-icons/bs';
const AudioSystem = () => {
  return (
    <div className='my-5 '>
      <div className='center card w-50vw shadow-xl grid justify-center m-5'>
        <div className='flex'>
          <div className='flex m-2'>
            <div>
              <input type='radio' name='radio-1' className='radio' checked />
            </div>
            <div className='flex'>
              <div className='m-1'>
                <BiHeadphone />
              </div>
              <div>
                <span>Headphones</span>
              </div>
            </div>
          </div>
          <div className='flex m-2'>
            <div>
              <input type='radio' name='radio-1' className='radio' />
            </div>
            <div className='flex'>
              <div className='m-1'>
                <BsFillSpeakerFill />
              </div>
              <div>
                <span>Speaker</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <select className='select select-bordered w-full max-w-xs'>
            <option disabled selected>
              How many subwoofers?
            </option>
            <option>2</option>
            <option>4</option>
            <option>6</option>
          </select>
        </div>
        <div>
          <select className='select select-bordered w-full max-w-xs'>
            <option disabled selected>
              How many speakers?
            </option>
            <option>2</option>
            <option>4</option>
            <option>6</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AudioSystem;
