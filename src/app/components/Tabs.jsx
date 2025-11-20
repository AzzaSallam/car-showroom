"use Client";
import React, { useState } from 'react';

const tabsArr = ["In Stock" , "Used Cars" , "Any Modals"];

const Tabs = () => {

  const [activeTab , setActiveTab] = useState("In Stock");


  return (
    <div style={{marginTop:'1rem' , padding:'0.3rem 4rem 0rem 4rem'}} className='border-b border-gray-200 '>
        <ul className='flex justify-center gap-6 text-gray-600 font-medium relative'>
          {tabsArr.map((tab , i)=>(
            <li key={i} onClick={()=>setActiveTab(tab)} 
              className={`cursor-pointer pb-6 relative transition-colors duration-200 ${activeTab === tab? 'text-red-700' :"hover:text-red-500"}`}
            >
              {tab}
              {activeTab === tab && (
                <span className='absolute bottom-0 left-0 w-full h-[3px] bg-red-700 rounded-full'></span>
              )}
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Tabs;
