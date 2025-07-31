import React from 'react'
import {delay, motion } from "framer-motion";
import coffee1 from "../assets/coffee1.png"
import coffee2 from "../assets/coffee3.png"
import coffee3 from "../assets/coffee1.png"
import { Container } from 'postcss';

const ServicesData = [
  {
    id:1,
    image: coffee1,
    title: "Black Coffee",
    subtitle:"Bold. Strong. Pure energy in every sip. Taste the richness of black coffee — made for true coffee lovers.",
  },
{
    id:2,
    image: coffee2,
    title: "Hot Coffee",
    subtitle:" Wake up your senses with our hot coffee — rich aroma, bold flavor, and warmth in every comforting sip. Sip. Smile. Repeat..",
  },
{
    id:3,
    image: coffee3,
    title: "Cold Coffee",
    subtitle:" Indulge in the warmth of our hot coffee — rich, aromatic, and brewed to energize your day with every soothing sip..",
  },
];
const cardVariants = {
  hidden:{opacity:0, y:20},
  visible:{
    opacity:1,
    y:0,
    transition:{
      type:"spring",
      stiffness:150,
      damping:10,
      ease:"easeInOut",
    },
  },
};
const containerVariants={
  hidden : {opacity:1 },
  visible:{
    opacity:1,
    transition:{
      delay:0.6,
      staggerChildren: 0.4,
    },
  },
};
const Services = () => {
return (
    <div className='container my-16 space-y-4'>
        <div className='text-center max-w-lg mx-auto space-y-2'>
            < motion.h1 initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{type:"spring",stiffness: 100,damping:10,delay:0.2}} className='text-3xl font-bold text-lightGray'>
                Fresh and <span className='text-primary'>Tasty Coffees</span>
            </motion.h1>
            <motion.p initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{type:"spring",stiffness: 100,damping:10,delay:0.2}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae </motion.p>
        </div>
        <motion.div variants={containerVariants} initial="hidden"
        whileInView={"visible"} viewport={{amount:0.8}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ServicesData.map((service)=>(
            <motion.div variants={cardVariants} className="text-center p-4 space-x-6 space-y-6 ">
            <img  
  src={service.image}  
  className='img-shadow2 max-w-[200px] ml-15 mx-auto hover:scale-110 duration-300 cursor-pointer' 
/>

              <motion.h1 initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{type:"spring",stiffness: 100,damping:10,delay:0.2}} className='text-3xl text-primary font-bold'>{service.title}</motion.h1>
              <h1 className='text-darkGray'>{service.subtitle}</h1>
             
            </motion.div>
          ))}
        </motion.div>
    </div>
  )
}

export default Services
