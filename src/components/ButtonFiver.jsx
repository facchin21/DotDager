import { SiFiverr } from "react-icons/si";
import React from 'react'

export const ButtonFiver = () => {
  const link = `https://www.fiverr.com/marianovilla807`;
    return (
    <span className="inline-block bg-[#1DBF73] px-2 py-2 
        rounded-full transition-all duration-300 hover:translate-y-1">
        <a href={link}
            target='_blank'>
                <SiFiverr color="white" 
                className="text-3xl"/>        
        </a>
    </span>
  )
}
