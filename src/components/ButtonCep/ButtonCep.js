import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ButtonCep extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event) {
    event.preventDefault()
    this.props.handleClick()
  }
  render() {
    return <button onClick={this.handleClick}>{this.props.text}</button>
  }
}

ButtonCep.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
export default ButtonCep
