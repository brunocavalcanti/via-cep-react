import React, { Component } from 'react'
import FormCep from '../components/FormCep'
import ServiceCep from '../services/cep'
import ViewCep from '../components/ViewCep'
export default class ContainerCep extends Component {
  constructor() {
    super()
    this.searchCep = this.searchCep.bind(this)
    this.state = {
      cep: {}
    }
  }
  async searchCep({ cep }) {
    try {
      const result = await ServiceCep.searchCep({ cep })
      const cepJson = await result.json()
      if (cepJson && cepJson.localidade) {
        this.setState({
          cep: cepJson
        })
      } else {
        this.setState({
          cep: {
            localidade: 'Não encontrado',
            bairro: 'Não encontrado',
            logradouro: 'Não encontrado'
          }
        })
      }
    } catch (error) {
      this.setState({
        cep: {
          localidade: 'Não encontrado',
          bairro: 'Não encontrado',
          logradouro: 'Não encontrado'
        }
      })
    }
  }
  render() {
    const formProps = {
      text: 'Buscar cep',
      searchCep: this.searchCep
    }
    return (
      <div>
        <FormCep {...formProps} />
        <ViewCep {...this.state.cep} />
      </div>
    )
  }
}
