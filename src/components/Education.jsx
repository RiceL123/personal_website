import React from 'react';

const Education = () => {
  return (
    <section id='education'>
      <h2 className='text-4xl mb-2'>Education</h2>
      <hr />
      <div className="flex place-items-center">
        <h4 className='text-lg'>UNSW Sydney Engineering</h4>
        <span className='mx-2'>•</span>
        <p>Feb 2022 - present</p>
      </div>
      <div className='block sm:flex sm:place-items-center'>
      <p className='ml-2'>Bachelor of Computer Science</p>
      <span className='mx-1 text-sm hidden sm:block'>•</span>
      <p className='text-xs text-gray-500'>C, Python, JavaScript/TypeScript, React, SQL, bash, java, rust</p>
      </div>
    </section>
  );
};

export default Education;