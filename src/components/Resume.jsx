import React from 'react';
import Navbar from './Navbar';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center'>
        <a
          className="py-2 px-4 rounded inline-block relative group"
          href='https://raw.githubusercontent.com/RiceL123/personal_website/main/assets/ERIC%20RESUME.pdf'
        >
          <div className="flex items-center space-x-2">
            <p>Resume</p>
            <svg
              id="download_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 120.89"
              className="w-4 h-4 fill-current"
            >
              <path d="M84.58,47a7.71,7.71,0,1,1,10.8,11L66.09,86.88a7.72,7.72,0,0,1-10.82,0L26.4,58.37a7.71,7.71,0,1,1,10.81-11L53.1,63.12l.16-55.47a7.72,7.72,0,0,1,15.43.13l-.15,55L84.58,47ZM0,113.48.1,83.3a7.72,7.72,0,1,1,15.43.14l-.07,22q46,.09,91.91,0l.07-22.12a7.72,7.72,0,1,1,15.44.14l-.1,30h-.09a7.71,7.71,0,0,1-7.64,7.36q-53.73.1-107.38,0A7.7,7.7,0,0,1,0,113.48Z" />
            </svg>
          </div>
          <span className='absolute inset-x-0 bottom-0 h-0.5 bg-primary-300 transform scale-x-0 transition-transform group-hover:scale-x-100'></span>
        </a>
      </div>
      <img src="https://raw.githubusercontent.com/RiceL123/personal_website/main/assets/ERIC%20RESUME.png" alt="resume" />
    </div>
  );
};

export default Resume;