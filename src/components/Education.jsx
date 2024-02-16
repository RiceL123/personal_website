import React from 'react';

const Education = () => {
  return (
    <section id='education'>
      <h2 className='text-4xl mb-2'>Education</h2>
      <hr className='border-primary-300'/>
      <div className="flex place-items-center">
        <h4 className='text-lg font-normal'>UNSW Sydney Engineering</h4>
        <span className='mx-2'>•</span>
        <p>Feb 2022 - present</p>
      </div>
      <div className='block sm:flex sm:items-baseline'>
        <p className='ml-2'>Bachelor of Computer Science</p>
        <p className='text-xs text-primary-500 ml-2'>C, Python, JavaScript/TypeScript, React, SQL, bash, java, rust</p>
      </div>
    </section>
  );
};

export default Education;