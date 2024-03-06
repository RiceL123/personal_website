import React from 'react';
import Navbar from './Navbar';

const PageNotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center drop-shadow-lg rounded bg-black min-h-32">
        <div className='absolute bg-white-900 rounded-md backdrop-blur border border-gray-100 p-2 z-10'>
          <h2 className='text-5xl mx-auto text-white'>404 Page Not Found</h2>
          <p className='text-white'>u lost? well, here is me playing tetris (its not sped up)</p>
          <details className='text-white text-sm' close>
            <summary>40 Line Sprint Stats</summary>
            <p className='ml-2'>time: 24.197s</p>
            <p className='ml-2'>pieces per second: 4.22</p>
            <p className='ml-2'>blocks: 102</p>
          </details>
        </div>
        <img src="https://raw.githubusercontent.com/RiceL123/personal_website/main/assets/sprint pb.gif" alt="sprint pb" />
      </div>
    </div>
  );
};

export default PageNotFound;