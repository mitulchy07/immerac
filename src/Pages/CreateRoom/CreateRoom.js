import React, { useState } from 'react';
import AudioSystem from '../Component/AudioSystem/AudioSystem';
import DisplaySystem from '../Component/DisplaySystem/DisplaySystem';
import LightSystem from '../Component/LightSystem/LightSystem';
import PeopleAmount from '../Component/PeopleAmount/PeopleAmount';
import RoomDimention from '../Component/RoomDimention/RoomDimention';

const CreateRoom = () => {
  const [page, setPage] = useState(0);
  const formTitle = [
    'Set Room Dimention',
    'Number of People',
    'Set Display System',
    'Set Lighting System',
    'Set Audio System',
  ];
  const [formData, setFormData] = useState({
    height: '',
    width: '',
    length: '',
    pAmount: '',
    ratio: '',
    dimention: '',
    distance: '',
    displayDevice: '',
    frontLight: '',
    backLight: '',
    rightLight: '',
    leftLight: '',
    audioDevice: '',
    subwoofers: '',
    speakers: '',
  });
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(formData)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';

    link.click();
  };
  const handleSubmit = () => {
    console.log(formData);
  };

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <RoomDimention
          formData={formData}
          setFormData={setFormData}
        ></RoomDimention>
      );
    } else if (page === 1) {
      return (
        <PeopleAmount
          formData={formData}
          setFormData={setFormData}
        ></PeopleAmount>
      );
    } else if (page === 2) {
      return (
        <DisplaySystem
          formData={formData}
          setFormData={setFormData}
        ></DisplaySystem>
      );
    } else if (page === 3) {
      return (
        <LightSystem
          formData={formData}
          setFormData={setFormData}
        ></LightSystem>
      );
    } else if (page === 4) {
      return (
        <AudioSystem
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          exportData={exportData}
        ></AudioSystem>
      );
    }
  };
  return (
    <div className='center grid gap-5 justify-center content-center my-5'>
      <div className='data '>
        <div>
          <h1 className='text-7xl'>{formTitle[page]}:</h1>
        </div>
        <div>{pageDisplay()}</div>
        <div className='flex justify-between'>
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
            className='btn btn-accent'
          >
            Prev
          </button>
          <button
            disabled={page === formTitle.length - 1}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
            className='btn btn-secondary'
          >
            Next
          </button>
        </div>
        {/* <div>
          <button className='btn btn-success w-full my-2 hidden'>Save</button>
        </div> */}
      </div>
    </div>
  );
};

export default CreateRoom;
