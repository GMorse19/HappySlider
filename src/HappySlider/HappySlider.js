import React, { Component } from 'react'

import 'react-rangeslider/lib/index.css'

import './HappySlider.css'

class HappySlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 3,
      className: 'smiley-3'
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })

    // Set 'x' to the slider value
    const x = event.target.value

    // Conditionals that change the className based on the value of slider
    if (x === '1') {
      this.setState({
        className: 'smiley-1'
      })
    } else if (x === '2') {
      this.setState({
        className: 'smiley-2'
      })
    } else if (x === '3') {
      this.setState({
        className: 'smiley-3'
      })
    } else if (x === '4') {
      this.setState({
        className: 'smiley-4'
      })
    } else if (x === '5') {
      this.setState({
        className: 'smiley-5'
      })
    }
  }

  render () {
    const { value, className } = this.state
    return (
      <div className="slidecontainer">
        <input
          type="range"
          onChange={this.handleChange}
          min={1}
          max={5}
          value={value}
          className={className}
          id="myRange"
        />
      </div>
    )
  }

}

export default HappySlider
