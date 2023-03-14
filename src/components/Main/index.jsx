import { StyledMain } from './style'
import api from '../api'
import { useEffect, useState } from 'react'

const Main = () => {
  const [listPokemons, setListPokemons] = useState([])
  useEffect(() => {
    api
      .get('pokemon/')
      .then((response) => {
        setListPokemons(response.data.results)
      })
      .catch((error) => {})
  }, [])

  return (
    <>
      <StyledMain>
        <div className="cont-card">
          {listPokemons.map((element, index) => {
            return (
              <>
                <div className="card">
                  <h1>{element.name}</h1>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      index + 1
                    }.png`}
                    alt=""
                  />
                </div>
              </>
            )
          })}
        </div>
      </StyledMain>
    </>
  )
}

export default Main
