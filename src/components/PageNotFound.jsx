import React from 'react';
import Navbar from './Navbar';

const PageNotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center bg-black drop-shadow-lg rounded">
        <div className='absolute bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 p-2 z-10'>
          <h2 className='text-5xl mx-auto text-white'>404 Page Not Found</h2>
          <p className='text-white'>here is me playing tetris (its not sped up)</p>
        </div>
        <video src="https://raw.githubusercontent.com/RiceL123/personal_website/main/assets/sprint pb.mov" autoPlay controls loop muted className='rounded'></video>
      </div>
    </div>
  );
};

export default PageNotFound;