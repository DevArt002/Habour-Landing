import React, { useCallback, useState } from 'react'
// Import styles
import './style.scss'

const BaseSelect = ({ className = '', options = [], onChange = null, ...rest }) => {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState(0)

  // Listener for select box click
  const handleSelectBoxClick = useCallback(() => {
    setActive((currentState) => !currentState)
  }, [])

  // Listener for option click
  const handleOptionClick = useCallback((newValue) => {
    setValue(newValue)
    if (onChange) onChange(options[newValue])
  }, [])

  return (
    <div
      className={`base-select ${className} ${active ? 'active' : ''}`}
      onClick={handleSelectBoxClick}
      {...rest}
    >
      <p className="base-select__value">{options[value]}</p>
      <div className="base-select__drop-down">
        {options.map((option, index) => (
          <label
            className="base-select__option"
            onClick={() => handleOptionClick(index)}
            key={`base-select__option__${index}`}
          >
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}

export default BaseSelect
