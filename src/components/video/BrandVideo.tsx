'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface BrandVideoProps {
  className?: string
  videoSrc: string
  placeholderSrc: string
}

const BrandVideo: React.FC<BrandVideoProps> = ({ 
  className = '', 
  videoSrc,
  placeholderSrc 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoading(false)
    }

    video.addEventListener('loadeddata', handleLoadedData)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Placeholder Image */}
      {isLoading && (
        <div className="absolute inset-0">
          <Image
            src={placeholderSrc}
            alt="Video placeholder"
            fill
            className="object-contain rounded-2xl"
            priority
          />
        </div>
      )}
      
      {/* Video */}
      <video
        ref={videoRef}
        className={`w-full h-full object-contain rounded-2xl ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        autoPlay
        loop
        muted
        playsInline
        poster={placeholderSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default BrandVideo 