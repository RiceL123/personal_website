import React from 'react';

const Work = () => {
  let workExperience = [
    {
      company: "DataAnnotation",
      location: "Remote",
      date: "Feb 2023 - Now",
      role: "AI Trainer",
      description: "Evaluating generative AI code responses on correctness, performance, readability and design in Python, JavaScript, Java, Rust and C"
    },
    {
      company: "Timezone",
      location: "Sydney, NSW",
      date: "Mar 2022 - Nov 2022",
      role: "Guest Services Attendant",
      description: "Serving customers at POS, checking merchandise, cleaning and fixing arcade machine problems"
    },
    {
      company: "Best Hiking Tents",
      location: "Brisbane, QLD",
      date: "Feb 2016 - Jan 2022",
      role: "Assistant Manager",
      description: "Creating and editing product listings, managing inventory, tracking customer records and addressing inquiries"
    },
    {
      company: "Private Tutoring",
      location: "Brisbane, QLD",
      date: "Jan 2018 - Feb 2020",
      role: "Private Tutor",
      description: "Tutoring primary and highschool students ranging from grades 4 to 12 in English, math and science"
    }
  ]

  return (
    <section className='mt-5' id='experience'>
      <h2 className='text-4xl mb-2'>Work Experience</h2>
      <hr className='border-primary-300' />
      {workExperience.map(({ company, date, role, description, location }) =>
        <div className='mb-3'>
          <div className="block sm:flex place-items-end">
            <div className='flex place-items-end'>
              <h4 className='text-lg font-normal'>{company}</h4>
              <span className='mx-2'>•</span>
              <p>{role}</p>
            </div>
            <div className='flex place-items-end grow'>
              <span className='mx-2 hidden sm:block'>•</span>
              <p>{date}</p>
              <p className='ml-auto text-primary-500 text-sm'>{location}</p>
            </div>
          </div>
          <p className='ml-2 text-primary-600'>{description}</p>
        </div>)}
    </section>
  );
};

export default Work;