import App from 'next/app';
import Link from 'next/link';
import React from 'react';
export default function Navbar(){
  
    return( 
        <nav className='flex bg-black h-24 text-white '>
                        

            
            <ul className='flex px-4 nav-links' />



        
        


            <img className="h-10 my-12 "src='pakwheels.png'></img>
            
            <div className='text-left px-6 py-16'><a href='#UsedCars'>Used Cars</a></div>
        <div className='text-left px-6 py-16'><a href='#NewCars'>New Cars</a></div>
<div className=' text-left px-7 py-16'><a href='#Bikes'>Bikes</a></div>
<div className='text-left px-7 py-16'><a href='#AutStore'>AutoStore</a></div>
<div className='text-left px-7 py-16'><a href='#Videos'>Videos</a></div>
<div className='text-left px-7 py-16'><a href='#Forums'>Forums</a></div>
<div className='text-left px-7 py-16' ><a href='#Blog'>Blog</a></div>
<div className='text-left px-7 py-16' ><a href='#More'>More</a></div>
<button className="bg-red-800 rounded-md mx-6 px-6 text-nowrap h-10 w-40 my-12"><a href='#Post an Ad'>Post an Ad</a></button>
         



           
               
               
        
                
</nav>        
    )
} 
import Herosection from '../Homepage/Herosection';