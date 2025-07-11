import React from 'react'
import '../app/globals.css';
import { MeteorDemo } from './magicui/meteors';
import { Spotlight } from './ui/spotlight';
import { TypewriterEffectSmoothDemo } from './magicui/TypeWriter';
import Image from 'next/image';


const Hero = () => {
  return (
    <div
      id='hero'
      className="min-h-screen w-full px-4 md:px-16 lg:px-72 py-10 md:py-32 bg-[url('https://res.cloudinary.com/dhuoejdsi/image/upload/v1745744032/wallpaperflare.com_wallpaper_15_lejqmy.jpg')] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundAttachment: 'fixed' }}
    >
      <div className=''>
      <Spotlight className='top-16  left-10 md:left-32 md:top-20 h-screen' fill="white"/>
      </div>
      
      <div className="flex flex-col items-center justify-start">
      <div className='-pt-10 md:-pt-32 md:pb-10  flex items-center text-center'>{/*<Button/>*/}</div>
        <MeteorDemo />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center md:gap-10 sm:py-4 items-center mt-8 md:mt-0">
        <div className="text-center md:text-left md:px-4 md:w-1/2">
          <div className="text-sm px-4 py-3 sm:px-4 font-medium text-white bg-black bg-opacity-50 rounded-xl shadow-lg max-w-prose mx-auto md:mx-0">
            I&apos;m a full-stack developer with over a year of experience in building and developing web applications.
            I&apos;ve built projects that solve real-world problems and have practical use cases, aiming to make user lives easier. At this point, I want to be a part of taking something from 0 to 1. I just want to be head down chasing that goal.
            
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <Image
            className="rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 object-cover"
            src="/Profile.png" //lindedin profile image.
           // src="https://res.cloudinary.com/dhuoejdsi/image/upload/v1745743030/profile_ca1jhp.gif"
            alt="profile_pic"
            width={176}
            height={176}
          />
        </div>
      </div>

      <div>
          <TypewriterEffectSmoothDemo/>
      </div>
     
      {/* <div className='py-32 flex items-center justify-center'>
        <Link href="https://bento.me/karan-dev"><SafariDemo/></Link>
      </div> */}
      
    </div>

  )
}

export default Hero
