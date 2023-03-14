import api from '../components/api'

export const getPokemons = async () => {
  await api
    .get('pokemon/')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
