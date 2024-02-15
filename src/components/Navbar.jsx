import React from 'react';

const Navbar = () => {
  return (
    <div className='p-3 flex justify-between'>
      <div>
        <a href="https://www.cse.unsw.edu.au/~z5422235/">
          <img src="https://tetr.io/user-content/avatars/5e76f424a8a28e1c6b9e1f2f.jpg?rv=1627887094640" alt="pfp" className='rounded-full shadow-lg h-10 hover:ring hover:ring-gray-300 hover:shadow-2xl' />
        </a>
      </div>
      <div className='flex space-around'>
        <div className='mx-2 grid place-items-center hover:border-b-4'>
          <a href="https://www.linkedin.com/in/-eric-liao/">LinkedIn</a>
        </div>
        <div className='mx-2 grid place-items-center hover:border-b-4'>
          <a href="https://github.com/RiceL123">GitHub</a>
        </div>
        <div className='mx-2 grid place-items-center hover:border-b-4'>
          Resume
        </div>
      </div>
    </div>
  );
};

export default Navbar;