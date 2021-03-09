import React, { useCallback, useState } from 'react'
// Import custom components
import { BaseCircleCollapseButton } from 'Components/Common'
// Import styles
import './style.scss'

const BaseFAQItem = ({ className = '', faq = null, ...rest }) => {
  const [active, setActive] = useState(false)

  // Listener for collapse button click
  const handleCollapseClick = useCallback(() => {
    setActive((currentState) => !currentState)
  }, [])

  return (
    <div className={`base-faq-item ${className}`} {...rest}>
      <span className="base-faq-item__type">{faq?.type}</span>
      <div className="base-faq-item__qa">
        <span className="base-faq-item__question">{faq?.question}</span>
        <div className={`base-faq-item__answer ${active ? 'active' : ''}`}>
          {faq?.answer.map((answerParagraph, index) => (
            <p
              className="base-faq-item__answer-paragraph"
              key={`base-faq-item__answer-paragraph__${index}`}
            >
              {answerParagraph.data}
            </p>
          ))}
        </div>
      </div>
      <BaseCircleCollapseButton
        className="base-faq-item__collapse-btn"
        active={active}
        onClick={handleCollapseClick}
      />
    </div>
  )
}

export default BaseFAQItem
