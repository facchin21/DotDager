import React from 'react'
import YouTubeVideos from './YoutubeVideo'

export const Network = () => {
  return (
    <div className="text-light w-full flex flex-col justify-center 
    items-center py-16">
      <h1 className="text-light-dark font-extrabold text-4xl">
            Mis Redes
      </h1>
      <YouTubeVideos/>
    </div>
  )
}
