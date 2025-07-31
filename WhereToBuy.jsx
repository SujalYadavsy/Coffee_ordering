import React from 'react'
import worldmap from "../assets/world-map.png"

const WhereToBuy = () => {
  return (
    <div className='container my-36'><div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-content-center'>
        {/* */}
        <div className='space-y-8'>
            <h1 className='text-4xl font-bold text-darkGray font-serif'>Buy Our Products From Anywhere</h1>
            <div className='flex items-center gap-4'>
                <input type="text" placeholder='Name' className='px-4 py-2 border-[1px] border-gray-400 rounded-md w-full lg:w-[150px]' />
                <input type="email" placeholder='Email' className='px-4 py-2 border-[1px] border-gray-400 rounded-md w-full lg:w-[150px]'/>
            </div>
             <div className='flex items-center gap-4'>
                <input type="country" placeholder='Country' className='px-4 py-2 border-[1px] border-gray-400 rounded-md w-full lg:w-[150px]' />
                <input type="text" placeholder='Zip-Code' className='px-4 py-2 border-[1px] border-gray-400 rounded-md w-full lg:w-[150px]'/>
            </div>
            <button className=' text-white px-4 py-2 rounded-md hover: bg-primaryDark duration-200 w-full '> Order Now</button>
        </div>
        <div>
            <img src={worldmap} alt="" className="w-full sm:w-[500px] mx-auto ml-"/>
           
        </div>
        {/* world map section */}
        </div></div> 
  )
}

export default WhereToBuy