import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Projects from './components/Projects'

function App() {


  return (
    <>
      <Navbar />
      <div className="main m-2 md:m-6">
        <div className='flex'>
          <img src="https://cdn.discordapp.com/attachments/848817257303900162/1207625312779763762/ohno__clarifications.jpg?ex=65e053b7&is=65cddeb7&hm=1412b276ae1c9dcbe1328e0f024b7a0e5aa54b2efa588879f8f49a0880ad84fe&" alt="display photo" className='object-cover h-40 w-40 lg:h-64 lg:w-64 my-auto rounded-md shadow-lg' />
          <div className='m-2'>
            <h1 className='my-1 text-5xl lg:text-8xl lg:my-4 font-bold'>Eric Liao</h1>
            <p className='my-1 text-md'>I starting programming in 2022 and I have no idea what I'm doing. Currently at UNSW doing computer science in my third year.</p>
            <p className='text-xs'>Based in Sydney - I like to do random life side quests</p>
          </div>
        </div>

        <div className='m-3'>
          <p>asdasdkjsah daskjdh askdjsa hlkdjsah dlkjsahd salkjh daskldjh salkjdh salkdj haskdjs ahdlkjsahd lkasjhdls akjdh salkdh salkdjah sljdkhaslk jdhalskjdhsalkjdh salkdh salkdjsah dkjasdhsakjhdslakjdhsalkjdh salkjdh aslkdha slkjdhsalkjdh salkjdhaslkjdhlkjfha dlkfjhaldksjf hasdlkjfah dskfjh wiufhoqi wueryqoiewuryqew oiuryqewoiury qr91y9ry1230 9ry123r91 23yr09732yr0 1927ry13297r y123r 71237r y1327r y1239r 19238 r13298 r12938r 13298 r13298 rkj</p>
        </div>

        <Work />
        <Projects />
      </div>

    </>
  )
}

export default App
