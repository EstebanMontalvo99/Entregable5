import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import PokeCard from './PokeCard';
import pokeContainer from "./styles/pokeContainer.css";
const PokeContainer = ({ formUrl, pageIs0, page, setPage }) => {
  const [pokemons, getAllPokemons] = useFetch(formUrl);

  const handleNext = () => {
    setPage(page + 20);
  };
  const handlePrevious = () => {
    setPage(page - 20);
  };
  useEffect(() => {
    getAllPokemons();
  }, [formUrl]);

  return (
    <div className='pokeContainer'>
      {
        pokemons?.results ?
          <>
            <div onClick={handleNext} className='next'><p>⏭️</p></div>
            {pageIs0 ?
              ""
              :
              <div onClick={handlePrevious} className='previous'><p>⏮️</p></div>
            }
            {pokemons?.results.map(pokemon => (
              <PokeCard key={pokemon.url} url={pokemon.url} />
            ))}
          </>
          :
          pokemons?.pokemon.map(objPoke => (
            <PokeCard key={objPoke.pokemon.url} url={objPoke.pokemon.url} />
          ))
      }
    </div>
  );

};

export default PokeContainer;