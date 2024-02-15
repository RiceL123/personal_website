import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const stop = ["dont", "stop", "plz", "cmon", "😭", "bruv", "mate", "bro", "noo", "nooooo", "⚠️⚠️⚠️", "its", "my", "old", "website", "it", "looks", "awful", "plz", "dont", "open", "it"]

  return (
    <div className='p-3 flex justify-between'>
      <div className='flex place-items-center'>
        <img src={progress === 100
          ? "https://i.pinimg.com/736x/01/e8/9f/01e89f7d2ddd7dbecea2e70eedab55a8.jpg"
          : "https://tetr.io/user-content/avatars/5e76f424a8a28e1c6b9e1f2f.jpg?rv=1627887094640"}
          alt="pfp"
          className='rounded-full shadow-lg h-10 w-10 hover:ring hover:ring-gray-300'
          onClick={() => { progress < 100 ? setProgress(progress => progress + 1) : window.open("https://www.cse.unsw.edu.au/~z5422235/") }} />
        {progress > 0 ? <div className="w-14 bg-gray-200 rounded-full h-2 ml-3">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          <p className='text-xs mx-1 my-auto'>plz x{progress}</p>
          <p className='text-xs mx-1 my-auto'>{progress === 100 ? "ggs 💀" : stop[progress % stop.length]}</p>
        </div> : <></>}
      </div>
      <div className='flex space-around place-items-center'>
        <div className='mx-2 grid hover:border-b-4'>
          <Link to="/">Home</Link>
        </div>
        <div className='mx-2 grid hover:border-b-4'>
          <a href="https://www.linkedin.com/in/-eric-liao/">LinkedIn</a>
        </div>
        <div className='mx-2 grid hover:border-b-4'>
          <a href="https://github.com/RiceL123">GitHub</a>
        </div>
        <div className='mx-2 grid hover:border-b-4'>
          <Link to="/resume">Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;