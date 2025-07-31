import React from 'react';
import BgImage from "../assets/bg-slate.png";
import BlackCoffee from "../assets/black.png";
import Navbar from './Navbar/Navbar';
import {motion } from "framer-motion";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className='min-h-[350px] w-full'>
        <div className='container'>
          <Navbar/>
          {/* hero section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>

            {/* Text Content */}
            <div className="text-orange-200 mt-[100px] md:mt-0 p-4 space-y-28 ">
              <motion.h1 initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness: 100,damping:10,delay:0.2}} className='text-7xl font-bold leading-tight ml-14'>Black Tumbler</motion.h1>

              <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness: 100,damping:10,delay:0.2}}className='relative'>
                <div className='relative z-10 space-y-4'>
                  <motion.h2 initial={{opacity:0}} animate={{opacity:1}}>Black LifeStyle Lover's</motion.h2>
                  <motion.p initial={{opacity:0}} animate={{opacity:1}}>Coffee</motion.p>
                </div>
                <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25 rounded-lg'></div>
              </motion.div>
            </div>

            {/* Coffee Image */}
            <div className='relative'>
              <motion.img initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness: 100,damping:10,delay:0.6}}
                src={BlackCoffee}
                alt="Black Coffee"
                className='relative z-40 h-[400px] md:h-[700px]'
              />
              {/* orange circuling circle  */}
              <motion.div initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness: 100,damping:10,delay:1}} className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10'></motion.div>
              <div className='absolute -top-20 left-[200px] z-[1]'>
              <motion.h1 initial={{opacity:0}} animate={{opacity:1}} className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none'>Blvck Tumbler</motion.h1></div>
            </div>
            <div className="text-orange-200 mt-[100px] md:mt-0 p-4 space-y-28 ">
              <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Black Tumbler</h1>

              <div className='relative'>
                <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness: 100,damping:10,delay:0.2}} className='relative z-10 space-y-4'>
                  <h1 className='text-2xl'>Blavk tumbler</h1>
                  <motion.h1 initial={{opacity:0}} animate={{opacity:1}}  className='text-sm opacity-70 leading-loose'>Coffee TWhich Loved by many hate by idiots.Coffee TWhich Loved by many hate by idiots.Coffee TWhich Loved by many hate by idiots </motion.h1>
                </motion.div>
                <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50 rounded-lg'></div>
              </div>
            </div>
            {/* Optional third column */}
           </div>

          </div>
       
      </section>
    </main>
  );
};

export default Hero;
