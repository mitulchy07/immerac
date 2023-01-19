import React from 'react';
import { BiHeadphone } from 'react-icons/bi';
import { BsFillSpeakerFill } from 'react-icons/bs';
const AudioSystem = ({ formData, setFormData, handleSubmit, exportData }) => {
  const getAudioDevice = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormData({ ...formData, audioDevice: value });
  };
  return (
    <div className='my-5 '>
      <div className='center card w-50vw shadow-xl grid justify-center m-5'>
        <div className='flex'>
          <div className='flex m-2'>
            <div>
              <input
                type='radio'
                name='audioDevice'
                className='radio'
                onChange={getAudioDevice}
                value='headphone'
                checked={formData.audioDevice === 'headphone'}
              />
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
              <input
                type='radio'
                name='audioDevice'
                className='radio'
                onChange={getAudioDevice}
                value='speaker'
                checked={formData.audioDevice === 'speaker'}
              />
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
        <div className={formData.audioDevice === 'speaker' ? 'hidden' : ''}>
          <p>Headphones needed for {formData.pAmount} people.</p>
        </div>
        <div>
          <select
            className='select select-bordered w-full max-w-xs'
            onChange={(event) =>
              setFormData({ ...formData, subwoofers: event.target.value })
            }
            value={
              formData.subwoofers > 0
                ? formData.subwoofers
                : () => {
                    window.alart('Please enter a positive value');
                  }
            }
          >
            <option selected>How many subwoofers?</option>
            <option>2</option>
            <option>4</option>
            <option>6</option>
          </select>
        </div>
        <div className={formData.audioDevice === 'headphone' ? 'hidden' : ''}>
          <select
            className='select select-bordered w-full max-w-xs'
            onChange={(event) =>
              setFormData({ ...formData, speakers: event.target.value })
            }
            value={
              formData.speakers > 0
                ? formData.speakers
                : () => {
                    window.alart('Please enter a positive value');
                  }
            }
          >
            <option selected>How many speakers?</option>
            <option>2</option>
            <option>4</option>
            <option>6</option>
          </select>
        </div>
        <button className='btn btn-success' onClick={exportData}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AudioSystem;
