import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Import styles
import './style.scss'

const BaseAvatar = ({ className = '', image = '', ...rest }) => {
  const ref = useRef(null)

  useEffect(() => {
    // Animate whenever component reaches out to specific position of screen
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'center 80%',
      end: 'center top',
      onEnter: () => ref.current.classList.add('animate'),
      onLeave: () => ref.current.classList.remove('animate'),
      onEnterBack: () => ref.current.classList.add('animate'),
      onLeaveBack: () => ref.current.classList.remove('animate'),
    })
  }, [])

  return (
    <div className={`base-avatar ${className}`} ref={ref} {...rest}>
      <img className="base-avatar__img" src={image} />
    </div>
  )
}

export default BaseAvatar
