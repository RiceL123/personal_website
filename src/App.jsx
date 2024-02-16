import Navbar from './components/Navbar'
import Work from './components/Work'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {
  return (
    <>
      <Navbar />
      <div className="main m-2 md:mx-6">
        <div className='flex'>
          <div className='group relative min-w-40 min-h-40 lg:min-h-64 lg:min-w-64 my-auto overflow-hidden'>
            <img src="https://cdn.discordapp.com/attachments/848817257303900162/1207625312779763762/ohno__clarifications.jpg?ex=65e053b7&is=65cddeb7&hm=1412b276ae1c9dcbe1328e0f024b7a0e5aa54b2efa588879f8f49a0880ad84fe&" alt="display photo" className='object-contain w-40 h-40 lg:h-64 lg:w-64 rounded-md shadow-lg' />
            <div className="absolute inset-0 bg-primary-800 bg-opacity-15 transition-transform translate-x-full group-hover:translate-x-32 group-hover:skew-x-12 h-40 w-40 lg:h-64 lg:w-64"></div>
            <p className='transition-opacity opacity-100 group-hover:opacity-100 md:opacity-0 text-[0.6em] text-center'>you're welcome for the clarification</p>
          </div>
          <div className='m-2'>
            <h1 className='my-1 text-5xl lg:text-8xl lg:my-4 font-light	'>Eric Liao</h1>
            <p className='my-1 text-md'>I started programming in 2022 and have no idea what I'm doing 💀. Currently at UNSW in my penultimate year.</p>
            <p className='text-sm'>Based in Sydney - I like to do random life side quests</p>
          </div>
        </div>

        <div className='m-3'>
          <h3 id='about' className='text-3xl'>About Me</h3>
          <p className='ml-1'>Hey, I'm Eric. I grew up and completed my high school years in Brisbane until I decided to leave for Sydney where I am currently completing my computer science degree. I enjoy exploring and learning about various topics from religion to digital art as well as playing tetris, going to the gym and eating 🍔.</p>
        </div>
        <Education />
        <Work />
        <Projects />
      </div>
    </>
  )
}

export default App
