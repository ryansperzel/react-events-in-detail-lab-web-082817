// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  handleClick(e) {
    e.persist()
    let arr = [e.clientX, e.clientY]
    return this.props.onReceiveCoordinates(arr)
  }

  render(props) {
    return (<button onClick={this.handleClick.bind(this)} type="button">Click Me!</button>)
  }
}

export default CoordinatesButton
