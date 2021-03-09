import React from 'react'
// Import custom components
import { BaseAvatar } from 'Components/Common'
// Import styles
import './style.scss'

const BaseTestimonialItem = ({ className = '', testimonial = null, ...rest }) => {
  return (
    <div className={`base-testimonial-item noselect ${className}`} {...rest}>
      <div className="base-testimonial-item__header">
        <BaseAvatar
          className="base-testimonial-item__avatar"
          image={testimonial?.small_picture?.src}
        />
        <div className="base-testimonial-item__title">
          <span>{testimonial?.name}</span>
          <span>{testimonial?.program_name}</span>
        </div>
        <a
          className="base-testimonial-item__linkedin-btn"
          target="_blank"
          href={testimonial?.program_link}
        />
      </div>
      <div className="base-testimonial-item__content">
        <p className="base-testimonial-item__text">{testimonial?.text}</p>
        <p className="base-testimonial-item__education">Education - {testimonial?.education}</p>
      </div>
    </div>
  )
}

export default BaseTestimonialItem
