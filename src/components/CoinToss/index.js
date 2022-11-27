import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    Heads: 0,
    Tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onCoinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 1) {
      return this.setState(prevState => ({
        Tails: prevState.Tails + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
    return this.setState(prevState => ({
      Heads: prevState.Heads + 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    }))
  }

  render() {
    const {Heads, Tails, imageUrl} = this.state
    const count = Heads + Tails
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="tag">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <div>
            <button className="button" type="button" onClick={this.onCoinToss}>
              Toss Coin
            </button>
          </div>

          <div className="count-container">
            <p className="para">Total:{count}</p>
            <p className="para">Heads:{Heads}</p>
            <p className="para">Tails:{Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
