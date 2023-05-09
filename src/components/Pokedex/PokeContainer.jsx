import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import PokeCard from './PokeCard';

const PokeContainer = ({ formUrl }) => {

  const [pokemons, getAllPokemons] = useFetch(formUrl);
  useEffect(() => {
    getAllPokemons();
  }, [formUrl]);
  console.log(pokemons);
  return (
    <div className='pokeContainer'>

      {
        pokemons?.results
          ?
          (pokemons?.results.map(pokemon => (
            <PokeCard key={pokemon.url}
              url={pokemon.url} />)))
          :
          pokemons?.pokemon.map(objPoke => (
            <PokeCard
              key={objPoke.pokemon.url}
              url={objPoke.pokemon.url}
            />
          ))


      }



    </div>
  );
};

export default PokeContainer;