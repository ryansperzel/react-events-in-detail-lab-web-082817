// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

  handleClick(e) {
    e.persist()
    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
  }
  render(props) {
    return (
      <button onClick={this.handleClick.bind(this)} type='button'>Delayed Button</button>
    )
  }
}
