import React from 'react'

import './HappySlider.css'
import { smileys } from './smileyArray'

export const HappySlider = ({ id, value, min, max, name, onChange, className, step }) => {

    // Round the value of the slider
    // Unecessary if 'step' is set to an integer
    const rounded = Math.round(value)

    // Set the CSS variable from the 'id' of the input
    // and the rounded value of the slider
    document.documentElement.style.setProperty(`--background-image-${id}`, `url(${smileys[rounded]})`)

    return (
      <div className="slidecontainer">
        <input
          type="range"
          id={id}
          onChange={onChange}
          min={min}
          max={max}
          name={name}
          value={value}
          className={className}
          step={step}
        />
      </div>
    )
  }


export default HappySlider
