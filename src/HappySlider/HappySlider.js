import React, { Component } from 'react'

import './HappySlider.css'

import smiley1 from './Smileys/smiley1.png'
import smiley2 from './Smileys/smiley2.png'
import smiley3 from './Smileys/smiley3.png'
import smiley4 from './Smileys/smiley4.png'
import smiley5 from './Smileys/smiley5.png'

class HappySlider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 3
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
    const number = Math.round(event.target.value)

    const smileys = ['', smiley1, smiley2, smiley3, smiley4, smiley5]

    document.documentElement.style.setProperty('--background-image', `url(${smileys[number]})`)
    document.documentElement.style.setProperty('--background-color', 'purple')
  }

  render () {
    const { value } = this.state

    const rounded = Math.round(value)

    return (
      <div className="slidecontainer">
        <input
          type="range"
          onChange={this.handleChange}
          min={1}
          max={5}
          value={value}
          className={`smiley-${rounded}`}
          id="myRange"
          step={0.01}
        />
      </div>
    )
  }
}

export default HappySlider
