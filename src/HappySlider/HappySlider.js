import React, { Component } from 'react'

import './HappySlider.css'

class HappySlider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 3
    }
  }

  imageUrl = ''

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
    const number = Math.round(event.target.value)

    if(number === 1) {
      this.imageUrl = 'url(\/static\/media\/smiley1\.cb6d28ed\.png)'
    } else if (number === 2) {
      this.imageUrl = 'url(\/static\/media\/smiley2\.b4c1c338\.png)'
    } else if (number === 3) {
      this.imageUrl = 'url(\/static\/media\/smiley3\.f3969dab\.png)'
    } else if (number === 4) {
      this.imageUrl = 'url(\/static\/media\/smiley4\.e2025ea6\.png)'
    } else if (number === 5) {
      this.imageUrl = 'url(\/static\/media\/smiley5\.37ebb46b\.png)'
    }

    // const el = getComputedStyle(document.documentElement)
    // .getPropertyValue('--background-image')
    // console.log(el)

    document.documentElement.style.setProperty('--background-image', this.imageUrl)
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
