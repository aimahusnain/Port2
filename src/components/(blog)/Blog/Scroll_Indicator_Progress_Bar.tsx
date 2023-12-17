'use client'

import React from 'react'
import useReadingProgress from "../../../Hooks/useReadingProgress"

const ScrollProgressBar = () => {
  const completion = useReadingProgress();

  return (
        <span
        style={{transform: `translateX(${completion - 100}%)`}}
        className='transition-all duration-150 fixed z-[9999] bg-pinky-400 h-1 w-full top-0'
        />
  )
}

export default ScrollProgressBar