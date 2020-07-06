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

    const x = event.target.value

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
    const { value } = this.state
    return (
      <div>
      <div className="slidecontainer">
        <input
          type="range"
          onChange={this.handleChange}
          min={1}
          max={5}
          value={value}
          className={this.state.className}
          id="myRange"
        />
      </div>
      </div>
    )
  }

}

export default HappySlider
