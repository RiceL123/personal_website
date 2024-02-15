import React, { useState } from 'react';

const Navbar = () => {
  const [isPfpHover, setIsPfpHover] = useState(false)
  const [count, setCount] = useState(0)

  return (
    <div className='p-3 flex justify-between'>
      <div className='flex'>
        <a href="https://www.cse.unsw.edu.au/~z5422235/" 
          onMouseOver={() => {setIsPfpHover(true); setCount(count => count + 1)}}
          onMouseOut={() => setIsPfpHover(false)}>
          <img src={isPfpHover
            ? "https://i.pinimg.com/736x/01/e8/9f/01e89f7d2ddd7dbecea2e70eedab55a8.jpg" 
            : "https://tetr.io/user-content/avatars/5e76f424a8a28e1c6b9e1f2f.jpg?rv=1627887094640"}
            alt="pfp" 
            className='rounded-full shadow-lg h-10 w-10 hover:ring hover:ring-gray-300' />
        </a>
        {isPfpHover ? <p className='text-xs mx-1 my-auto'>plz x{count} dont click this 💀</p> : <></>}
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