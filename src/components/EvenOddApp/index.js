import {Component} from 'react'
import './index.css'

class evenObb extends Component {
  state = {count: 0, eoNumber: 'Even'}

  onIncrement = () => {
    const {count} = this.state
    const randomNumber = Math.ceil(Math.random())

    this.setState({
      count: randomNumber,
    })
    console.log(count, randomNumber)
    if (randomNumber % 2 === 0) {
      this.setState({
        eoNumber: 'Even',
      })
    } else {
      this.setState({
        eoNumber: 'Odd',
      })
    }
  }

  render() {
    const {count, eoNumber} = this.state
    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="description">Count is {eoNumber}</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default evenObb
