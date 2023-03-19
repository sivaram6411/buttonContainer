// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isCondition1: true, isCondition2: true}

  firstName = () => {
    this.setState(prevFirst => ({isCondition1: !prevFirst.isCondition1}))
  }

  lastName = () => {
    this.setState(prevLast => ({isCondition2: !prevLast.isCondition2}))
  }

  box1 = () => {
    const {isCondition1} = this.state
    if (isCondition1 === false) {
      return (
        <div className="hide-container">
          <p>Joe</p>
        </div>
      )
    }
    return null
  }

  box2 = () => {
    const {isCondition2} = this.state
    if (isCondition2 === false) {
      return (
        <div className="hide-container">
          <p>Jonas</p>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="hide-contain">
            <button className="button" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {this.box1()}
          </div>
          <div className="hide-contain">
            <button className="button" type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {this.box2()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
