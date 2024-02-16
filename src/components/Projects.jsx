import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "personal website",
      link: "https://ricel123.netlify.app/",
      description: "static website using React and Tailwindcss",
      image: "https://cdn.discordapp.com/attachments/848817257303900162/1207707475332177930/image.png?ex=65e0a03c&is=65ce2b3c&hm=d6cf650daefd96fefe2eec26081c8c53d7df0adff94cbf58ac065ebbe35372a3&"
    },
    {
      title: "UNSW memes backend",
      link: "https://github.com/RiceL123/unsw-memes",
      description: "backend for COMP1531 assignment using typescript with express framework and SQLite3",
      image: "https://cdn.discordapp.com/attachments/1080477395175358516/1097203040139870389/image.png?ex=65db7075&is=65c8fb75&hm=2e4c10487be3effdfe3add93ccc12ab10fe4c38ea1da00ef53523fa21e4d6cf9&"
    }
  ]
  return (
    <section className='my-5' id='projects'>
      <h2 className='text-4xl mb-2'>Projects</h2>
      <hr className='border-primary-300' />
      {projects.map(({ title, link, description, image }) => (<div className='my-3 flex space-x-2'>
        <img className="h-20 sm:h-32 shadow-md aspect-video object-cover rounded" src={image} alt={`image of ${title}`} />
        <div>
          <a href={link} className='inline-block relative group text-2xl'>
            {title}
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-primary-300 transform scale-x-0 transition-transform group-hover:scale-x-100'></span>
          </a>
          <p className='text-primary-400 text-xs sm:text-base'>{description}</p>
        </div>
      </div>))}
    </section>
  );
};

export default Projects;