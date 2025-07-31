import React from 'react'
import Baner from '../assets/coffee-cover.jpg' 
import AppS from '../assets/app_store.png' 
import AppSs from '../assets/play_store.png' 
import { motion } from "framer-motion";

const BannerStyle = {
  backgroundImage:`url(${Baner})`,
  backgroundSize:"cover",
  backgroundPosition : "center",
  backgroundRepeat:"no-repeat",
  height:"400px",
  width:"100%",
};
const AppBaner = () => {
  return (
    <div className='container my-14'>
 <div style={BannerStyle} className='sm-min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>


 <div>
  <div className='space-y-6 max-w-xl mx-auto'>
<motion.h1 initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{type:"spring",stiffness: 100,damping:10,delay:0.2}} className='text-2xl text-center sm:text-4xl font-semibold'>
  Download the app
</motion.h1>
<motion.p initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{type:"spring",stiffness: 100,damping:10,delay:0.2}} className='text-center sm:px-20'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime nulla commodi dicta laudantium amet!
</motion.p>
<motion.div initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness: 100,damping:10,delay:0.2}}className='flex justify-center gap-4'>
  <a href="#">
    <img src={AppS} alt="" className='h-[70px] w-[200px]'/>
  </a>
  <a href="#">
    <img src={AppSs} alt="" className='h-[70px] w-[200px]'/>
  </a>
</motion.div>
  </div>
 </div>
  </div>
</div>


  )}

export default AppBaner
