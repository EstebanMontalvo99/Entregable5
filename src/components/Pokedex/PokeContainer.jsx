import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import PokeCard from './PokeCard'

const PokeContainer = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  const [pokemons, getAllPokemons] = useFetch(url)
  useEffect(() => {
    getAllPokemons()
  }, [])
  console.log(pokemons);
  return (
    <div className='pokeContainer'>

      {
        pokemons?.results.map(pokemon => (
          <PokeCard key={pokemon.url}
            url={pokemon.url} />
        ))
      }

    </div>
  )
}

export default PokeContainer