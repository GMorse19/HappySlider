import React, { Component } from 'react'

import './HappySlider.css'

class HappySlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 3
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
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
