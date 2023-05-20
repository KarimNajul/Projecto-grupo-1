import { useState,useEffect } from "react";


export default function Carousel ({children: slides})  {

    return (
        <div className="overflow-hidden relative">
            <div className="flex"> {slides} </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button className=" p-1 rounded-full shadow-transparent bg-white/80 hover:bg-white text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button className=" p-1 rounded-full shadow-transparent bg-white/80 hover:bg-white text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )

}