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
      description: "backend for COMP1531 assignment to build a chat app using TypeScript with Express framework and SQLite3",
      image: "https://cdn.discordapp.com/attachments/848817257303900162/1207974936270999622/image.png?ex=65e19953&is=65cf2453&hm=05e21ebc84591d10fadd15f845211ed00070f252fd3ab2ba7603f49a674f4d5e&"
    },
    {
      title: "airbrb frontend",
      link: "https://github.com/RiceL123/airbrb",
      description: "frontend for COMP6080 assignment to build an Airbnb clone using React and Cypress",
      image: "https://cdn.discordapp.com/attachments/848817257303900162/1207981246227943454/image.png?ex=65e19f34&is=65cf2a34&hm=2f753f64cc808fd788a719e85d95b4bb7b8e631ac34601c6a2e4c84131d9dc12&"
    }
  ]
  return (
    <section className='my-5' id='projects'>
      <h2 className='text-4xl mb-2'>Projects</h2>
      <hr className='border-primary-300' />
      {projects.map(({ title, link, description, image }) => (<div className='my-3 flex space-x-2'>
        <a href={link} className='h-20 sm:h-48 aspect-video'>
          <img className="h-20 sm:h-48 shadow-md aspect-video object-cover rounded border-transparent transition duration-300 border-solid border-2 hover:border-primary-300" src={image} alt={`image of ${title}`} />
        </a>
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