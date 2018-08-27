import React, { Component } from 'react'
import ButtonCep from '../ButtonCep'
class FormCep extends Component {
  constructor() {
    super()
    this.state = {
      inputText: ''
    }
    this.searchCep = this.searchCep.bind(this)
    this.setInputText = this.setInputText.bind(this)
  }
  setInputText(event) {
    this.setState({
      inputText: event.target.value
    })
  }
  getInputText() {
    return this.state.inputText
  }

  async searchCep() {
    await this.props.searchCep({ cep: this.getInputText() })
  }
  render() {
    const buttonProps = {
      text: this.props.text,
      handleClick: this.searchCep
    }
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.setInputText}
          />
          <ButtonCep {...buttonProps} />
        </form>
      </div>
    )
  }
}

export default FormCep
