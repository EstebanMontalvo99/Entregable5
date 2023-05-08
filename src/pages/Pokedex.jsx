import React from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'

const Pokedex = () => {
  const { trainerName } = useSelector(state => state)
  return (
    <div><h1>Pokedex</h1>
      <p><span>Welcome {trainerName}</span> here you will find your favorites pokemons.</p>
      <FormPoke />
      <PokeContainer />
    </div>
  )
}

export default Pokedex