import React from 'react'

const ViewCep = props => {
  return (
    <div>
      <h3>Cidade: {props.localidade}</h3>
      <h3>Bairro: {props.bairro}</h3>
      <h3>Logradouro: {props.logradouro}</h3>
    </div>
  )
}
export default ViewCep
