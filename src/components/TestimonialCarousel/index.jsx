import React, { useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import useMouse from '@react-hook/mouse-position'
// Import custom components
import { BaseTestimonialItem } from 'Components/Common'
// Import styles
import './style.scss'
import 'react-alice-carousel/lib/scss/alice-carousel.scss'

const TestimonialCarousel = ({ className, testimonials, ...rest }) => {
  const mouseAreaRef = React.useRef(null)
  const cursorRef = React.useRef(null)
  const mouse = useMouse(mouseAreaRef, {
    fps: 80,
  })

  useEffect(() => {
    if (mouse.isOver) {
      cursorRef.current.classList.add('visible')
      cursorRef.current.style.opacity = 0.9
      cursorRef.current.style.left = mouse.x
      cursorRef.current.style.top = mouse.y
    } else {
      cursorRef.current.classList.remove('visible')
      cursorRef.current.style.opacity = 0
    }
  }, [mouse])

  return (
    <div className={`testimonial-carousel ${className}`} ref={mouseAreaRef} {...rest}>
      <div className="testimonial-carousel__bg" />
      <AliceCarousel
        autoHeight
        mouseTracking
        disableButtonsControls
        disableDotsControls
        infinite
        items={testimonials.map((testimonial, index) => (
          <BaseTestimonialItem
            className="testimonial-carousel__testimonial-item"
            testimonial={testimonial}
            key={`testimonial-carousel__testimonial-item__${index}`}
          />
        ))}
      />
      <div className="testimonial-carousel__mouse noselect" ref={cursorRef}>
        Drag
      </div>
    </div>
  )
}

export default TestimonialCarousel
