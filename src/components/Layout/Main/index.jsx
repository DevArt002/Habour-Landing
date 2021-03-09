import React from 'react'
// Import custom components
import LandingPage from 'Components/Pages'
// Import styles
import './style.scss'

const Main = ({ data }) => {
  return (
    <div className="main">
      <LandingPage data={data} />
    </div>
  )
}

export default Main
