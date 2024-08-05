import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="main-heading">
            Bob ate <span className="span-element">{count1}</span> mangoes{' '}
            <span className="span-element">{count2}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <div className="btn-contain">
                <button
                  type="button"
                  onClick={this.onMangoIncrement}
                  className="fruit-button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div className="btn-contain">
                <button
                  type="button"
                  onClick={this.onBananaIncrement}
                  className="fruit-button"
                >
                  Eat Bananas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
