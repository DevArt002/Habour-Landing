import React from 'react'
// Import styles
import './style.scss'

const BaseCircleCollapseButton = ({ className = '', active = false, onClick = null, ...rest }) => {
  return (
    <button
      className={`base-circle-collapse-btn ${className} ${active ? 'active' : ''}`}
      onClick={onClick}
      {...rest}
    >
      <svg className="base-circle-collapse-btn__circle">
        <g>
          <ellipse className="base-circle-collapse-btn__bg" />
          <ellipse className="base-circle-collapse-btn__fg" />
          <circle className="base-circle-collapse-btn__center-circle" />
          <line
            className="base-circle-collapse-btn__line horizontal"
            x1="35%"
            y1="50%"
            x2="65%"
            y2="50%"
          />
          <line
            className="base-circle-collapse-btn__line vertical"
            x1="35%"
            y1="50%"
            x2="65%"
            y2="50%"
          />
        </g>
      </svg>
    </button>
  )
}

export default BaseCircleCollapseButton
