import React, { useCallback } from 'react'
// Import styles
import './style.scss'

const Header = () => {
  // Listener for accordion buton click
  const handleAccordionButtonClick = useCallback(() => {
    // TODO
  }, [])

  // Listener for apply button click
  const handleApplyButtonClick = useCallback(() => {
    // TODO
  }, [])

  return (
    <div className="header">
      <p className="header__brand-name">
        HARBOUR.SPACE <span> /INTERACTION DESIGN</span>
      </p>
      <button className="header__accordion-btn" onClick={handleAccordionButtonClick} />
      <button className="header__apply-btn" onClick={handleApplyButtonClick}>
        APPLY NOW
      </button>
    </div>
  )
}

export default Header
