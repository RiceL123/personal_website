import React from 'react';

const Work = () => {
  let workExperience = [
    {
      company: "Timezone",
      location: "Sydney, NSW",
      date: "Mar 2022 - Nov 2022",
      role: "Guest Services Attendant",
      description: "Serving customers at POS and doing other tasks like checking merchandise, cleaning and fixing arcade machine problems"
    },
    {
      company: "Best Hiking Tents",
      location: "Brisbane, QLD",
      date: "Feb 2016 - Jan 2022",
      role: "Assistant Manager",
      description: "Best Hiking Tents is a small online business that sells bags, tents and other items"
    },
    {
      company: "Private Tutoring",
      location: "Brisbane, QLD",
      date: "Jan 2018 - Feb 2020",
      role: "Private Tutor",
      description: "Tutoring primary and highschool students English, math and science"
    }
  ]

  return (
    <div className='mt-5'>
      <h2 className='text-4xl'>Work Experience</h2>
      {workExperience.map(({company, date, role, description, location}) => 
      <div className='my-2'>
        <hr />
        <div className="flex place-items-center">
          <h4 className='text-lg'>{company}</h4>
          <span className='mx-2'>•</span>
          <p>{date}</p>
          <span className='mx-2'>•</span>
          <p>{role}</p>
          <p className='ml-auto text-gray-500 text-sm'>{location}</p>
        </div>
        <p className='ml-2 text-gray-600'>{description}</p>
      </div>)}
    </div>
  );
};

export default Work;