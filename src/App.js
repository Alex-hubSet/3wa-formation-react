import React from 'react'
import gonImage from './assets/images/gon-image.png';
import killuaImage from './assets/images/killua-image.png';
import kurapikaImage from './assets/images/kurapika-image.png';
import leorioImage from './assets/images/leorio-image.png';
import hisokaImage from './assets/images/hisoka-image.png';
import { FaArrowRight } from "react-icons/fa6"; 
import { IoIosFlash } from "react-icons/io";


export default function App() {
  return (

    <div> 
     <h1 className='text-center uppercase text-white mt-4 mb-2 flex items-center justify-center '> characters <IoIosFlash /> </h1> 
   
    <div className='  grid gap-4 grid-cols-3 grid-rows-2'>
   
    <div className='ml-4 bg-slate-50 w-60 rounded-sm '>
      <img className=" w-60 " src={gonImage}  />
       <p className='font-bold text-left ml-4 pt-2'>Gon Freecss</p>
       <p className='text-left text-xs ml-4 pt-2 pb-2'>A young and talented hunter with a pure heart.</p>
       <button className='border-rounded-lg bg-blue-700 rounded-sm ml-4 text-white p-1 '>Read more<FaArrowRight /> </button>
      
    </div>
    
    <div className='ml-4 bg-slate-50 w-60 rounded-sm '>
      <img className=" w-60 " src={killuaImage} alt="" />
      <p className='font-bold text-left ml-4 pt-2'>illua Zoldyck</p>
      <p className='text-left text-xs ml-4 pt-2 pb-2'>From an assassin's family, Gon's best friend.</p>
      <button className='border-rounded-lg bg-blue-700 rounded-sm ml-4 text-white p-1 '>Read more<FaArrowRight /> </button>

    </div>
    <div className='ml-4 bg-slate-50 w-60 rounded-sm '>
       <img className=" w-60 " src={kurapikaImage} alt="" />
       <p className='font-bold text-left ml-4 pt-2'>Kurapicka</p>
       <p className='text-left text-xs ml-4 pt-2 pb-2'>The last survivor of the Kurta clan, seeking to avenge his family.</p>
       <button className='border-rounded-lg bg-blue-700 rounded-sm ml-4 text-white p-1 '>Read more <FaArrowRight /></button>

    </div>
    <div className='ml-4 bg-slate-50 w-60 rounded-sm '>
      <img className=" w-60 " src={leorioImage} alt="" />
      <p className='font-bold text-left ml-4 pt-2'>Leorio Paradinight</p>
      <p className='text-left text-xs ml-4 pt-2 pb-2'>An aspiring doctor, he aims to help others.</p>
      <button className='border-rounded-lg bg-blue-700 rounded-sm ml-4 text-white p-1 '>Read more<FaArrowRight /> </button>

    </div>
    <div className='ml-4 bg-slate-50 w-60 rounded-sm '>
      <img className=" w-60 " src={hisokaImage} alt="" />
      <p className='font-bold text-left ml-4 pt-2'>Hisoka morrow</p>
      <p className='text-left text-xs ml-4 pt-2 pb-2'>A mysterious and dangerous magician with his own agenda.</p>
      <button className='border-rounded-lg bg-blue-700 rounded-sm ml-4 text-white p-1 '>Read more <FaArrowRight /></button>

    </div>
    </div>
    </div>
  )
}