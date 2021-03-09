import React from 'react'
// Import styles
import './style.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__item">
        <p className="footer__title">Zeptolab</p>
        <p>Marketing Performance</p>
      </div>
      <div className="footer__item">
        <p className="footer__title">Location</p>
        <p>Bangkok</p>
      </div>
      <div className="footer__item">
        <p className="footer__title">Duration</p>
        <p>1 year Full-Time</p>
      </div>
      <div className="footer__item">
        <p className="footer__title">Start date</p>
        <p>3 Aug 2020</p>
      </div>
      <div className="footer__item">
        <p className="footer__title">Application deadline</p>
        <p>30 June 2020</p>
      </div>
      <div className="footer__item">
        <p className="footer__title">Application closes in</p>
        <p>6 Day : 22 Hrs : 56 Min</p>
      </div>
    </div>
  )
}

export default Footer
