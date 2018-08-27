const searchCep = async ({ cep }) => {
  return await fetch(`https://viacep.com.br/ws/${cep}/json/`)
}
export default { searchCep }
