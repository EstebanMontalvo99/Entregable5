import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FormPoke from '../components/Pokedex/FormPoke';
import PokeContainer from '../components/Pokedex/PokeContainer';
import pokedex from "../components/Pokedex/styles/pokedex.css";
const Pokedex = () => {
  const [page, setPage] = useState(0);
  const [pageIs0, setPageIs0] = useState(true);
  useEffect(() => {
    if (page === 0) {
      setPageIs0(true);
    } else {
      setPageIs0(false);
    }
  }, [page]);

  const urlBase = `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${page}`;
  const [formUrl, setFormUrl] = useState(urlBase);
  useEffect(() => {
    setFormUrl(urlBase);
  }, [page]);


  const { trainerName } = useSelector(state => state);

  const handleNext = () => {
    setPage(page + 20);
  };
  const handlePrevious = () => {
    setPage(page - 20);
  };
  return (
    <div className='pokedex__container'>
      <div onClick={handleNext} className='next'><p>⏭️</p></div>
      {pageIs0 ?
        ""
        :
        <div onClick={handlePrevious} className='previous'><p>⏮️</p></div>}
      <p className='pokedex__text'><span className='pokedex__greetings'>Welcome {trainerName}</span> here you will find your favorites pokemons.</p>
      <FormPoke setFormUrl={setFormUrl} urlBase={urlBase} />
      <PokeContainer formUrl={formUrl} page={page} />
    </div>
  );
};

export default Pokedex;