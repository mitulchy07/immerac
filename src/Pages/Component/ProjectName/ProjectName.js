import React from 'react';

const ProjectName = ({ formData, setFormData }) => {
  return (
    <div className='my-5 '>
      <div className='center card w-50vw shadow-xl grid justify-center m-5'>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>
                What is the name of your project?
              </span>
            </label>
            <label className='input-group'>
              <input
                type='text'
                placeholder='My World'
                className='input input-bordered'
                onChange={(event) =>
                  setFormData({ ...formData, projectName: event.target.value })
                }
                value={formData.projectName}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectName;
