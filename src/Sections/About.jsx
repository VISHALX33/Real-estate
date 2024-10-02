import React, { useEffect } from 'react'
import aboutimg from '../assets/images/about.jpg'
import { useDarkMode } from '../components/DarkModeContext'
// import heroimg from "../assets/images/hero1.webp"
import AOS from 'aos'
import 'aos/dist/aos.css'
const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  const { darkMode, toggleDarkMode } = useDarkMode();


  return (
    <section id="about" className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center gap-10 `}>
      <div>
        <img data-aos="zoom-in" src={aboutimg} alt="about image" className='rounded-2xl lg:w-[500px] lg:h-[600px] ' />
      </div>
      <div className='flex flex-col justify-center items-start gap-8'>
        <h1 date-aos="zoom-in" className='text-red-500 dark:text-white' >Who We Are</h1>
        <h1 data-aos='zoom-in' data-aos-delay='400' className='text-black text-[40px] font-semibold leading-10 dark:text-white '>AT Home Real-Estate <br></br>  </h1>
        
        <p date-aos="zoom-in" data-aos-delay="400" className='text-xl text-gray-600 dark:text-white text-justify ' > we believe that finding a home is more than just a transaction—it's a journey toward building your future. With years of expertise in the real estate market, we are committed to offering personalized, transparent, and professional service to each of our clients. Whether you're buying, selling, or investing, our goal is to match you with properties that reflect your lifestyle and needs. We pride ourselves on creating lasting relationships and ensuring a seamless experience from start to finish.</p>
        <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4  text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300  ' > READ MORE</button>


      </div>

    </section>
    
  )
}

export default About