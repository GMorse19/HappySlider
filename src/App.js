import React from 'react';

import './App.scss';

import HappySlider from './HappySlider/HappySlider'

class App extends React.Component {
  constructor() {
    super()
      this.state = {
        sliderOne: 3,
        sliderTwo: 3
      }
  }

  handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
    }

  render() {
    return (
      <div className="App">
        <HappySlider
          type="range"
          onChange={this.handleChange}
          min='1'
          max='5'
          value={this.state.sliderOne}
          name="sliderOne"
          className='sliderOne'
          id="sliderOne"
          step='0.01'
        />
        <HappySlider
          type="range"
          onChange={this.handleChange}
          min='1'
          max='5'
          value={this.state.sliderTwo}
          name='sliderTwo'
          className='sliderTwo'
          id="sliderTwo"
          step='0.01'
        />
      </div>
    );
  }
}

export default App;
