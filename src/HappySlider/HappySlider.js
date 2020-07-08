import React, { Component } from 'react'

import './HappySlider.css'

class HappySlider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 3
    }
  }

  imageUrl = './Smiley/smiley3.png'

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
    // const number = Math.round(event.target.value)
    // console.log(number)
    document.body.style.setProperty('--background-image', "url(" + this.imageUrl + ")")
  }

  render () {
    const { value } = this.state

    // const rounded = Math.round(value)

    return (
      <div className="slidecontainer">
        <input
          type="range"
          onChange={this.handleChange}
          min={1}
          max={5}
          value={value}
          className='smiley'
          id="myRange"
          step={0.01}
        />
      </div>
    )
  }
}

export default HappySlider
