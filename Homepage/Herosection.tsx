import App from "next/app"
import Link from "next/link"
import React from "react"
export default function Herosection(){
    return(
<div>
    <h1 className="mt-7 text-2xl py-4 font-semibold text-center flex-col ">
        Sell Your Car on PakWheels and Get the Best Price</h1>
        
        <div className="flex  items-start px-32 mt-7">
    <ul className="px-16 py-4 my-2 mt-7  text-xl text-blue-900 text-left flex-col border border-gray-300 ">
            <h1 className="py-4 text-blue-900 font-semibold text-xl ">Post your Ad on PakWheels</h1>
            <p className="text-sm text-gray-500 ">Post your Ad for Free in 3 Easy Steps</p>
            <p className="  text-sm text-gray-500">Get Genuine offers from Verified Buyers</p>
            <p className="  text-sm text-gray-500 ">Sell your car Fast at the Best Price</p>
            <button className="  bg-red-800 rounded-md mx-6 px-4 text-lg w-40 h-10 my-4 text-white">Post Your Ad</button>
           </ul> 
           <div className="my-auto text-2xl font-semibold text-left px-16 justify-center">OR</div>
            <div className="px-16  mx-2 mt-7  py-1 text-xl border  border-gray-300  text-right">
                
            <h2 className= "text-blue-900 font-semibold my-8 text-xl flex-col mb-4 px-2 ">Try PakWheels Sell It For Me</h2>
            <ul className="space-y-2 text-sm"></ul>
            <p className="text-sm text-gray-500">Dedicated Sells Expert to Sell your Car</p>
            <p className="text-sm text-gray-500">We Bargain for you and share the Best Offer</p>
            <p className="text-sm text-gray-500">We ensure Safe & Secure Transaction</p>
            <button className="bg-blue-400 text-white rounded-md mx-4 px-2 text-lg w-42 h-10 my-5"><a href="#Register Your Car">Register Your Car</a></button>
            </div>
</div>
</div>

    )
}
import Navbar from "../page"
