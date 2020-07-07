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
    return (
      <div className="slidecontainer">
        <input
          type="range"
          onChange={this.handleChange}
          min={1}
          max={5}
          value={value}
          className={`smiley-${value}`}
          id="myRange"
          step={1}
        />
      </div>
    )
  }
}

export default HappySlider
