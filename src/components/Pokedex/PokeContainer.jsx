import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import PokeCard from './PokeCard';
import pokeContainer from "./styles/pokeContainer.css";
const PokeContainer = ({ formUrl, }) => {
  const [pokemons, getAllPokemons] = useFetch(formUrl);


  useEffect(() => {
    getAllPokemons();
  }, [formUrl]);

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