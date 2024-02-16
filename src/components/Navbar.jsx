import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const stop = ["dont", "stop", "plz", "cmon", "😭", "bruv", "mate", "bro", "noo", "nooooo", "⚠️⚠️⚠️", "its", "my", "old", "website", "it", "looks", "awful", "plz", "dont", "open", "it"]
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/-eric-liao/"
    },
    {
      title: "GitHub",
      link: "https://github.com/RiceL123"
    },
    {
      title: "Resume",
      link: "/resume"
    }
  ]

  return (
    <div className='p-3 flex justify-between'>
      <div className='flex place-items-center'>
        <img src={progress === 100
          ? "https://i.pinimg.com/736x/01/e8/9f/01e89f7d2ddd7dbecea2e70eedab55a8.jpg"
          : "https://tetr.io/user-content/avatars/5e76f424a8a28e1c6b9e1f2f.jpg?rv=1627887094640"}
          alt="pfp"
          className='rounded-full shadow-lg h-12 w-12 transition hover:ring hover:ring-primary-300'
          onClick={() => { progress < 100 ? setProgress(progress => progress + 1) : window.open("https://www.cse.unsw.edu.au/~z5422235/") }} />
        {progress > 0 ? <div className="w-14 sm:w-64 md:w-96 bg-gray-200 rounded-full h-2 ml-3">
          <div className={`${progress === 100 ? "bg-red-600" : "bg-primary-300"} delay-100 h-2 rounded-full`} style={{ width: `${progress}%` }}></div>
          <p className='text-xs mx-1 my-auto overflow-visible'>plz x{progress}</p>
          <p className='text-xs mx-1 my-auto'>{progress === 100 ? "ggs 💀" : stop[progress % stop.length]}</p>
        </div> : <></>}
      </div>
      <div className='flex space-x-3 place-items-center'>
        {links.map(({ title, link }) => (<Link to={link} className='inline-block relative group'>
          {title}
          <span className='absolute inset-x-0 bottom-0 h-0.5 bg-primary-300 transform scale-x-0 transition-transform group-hover:scale-x-100'></span>
        </Link>))}
      </div>
    </div>
  );
};

export default Navbar;