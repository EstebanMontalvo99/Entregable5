import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FormPoke from '../components/Pokedex/FormPoke';
import PokeContainer from '../components/Pokedex/PokeContainer';
import pokedex from "../components/Pokedex/styles/pokedex.css";
const Pokedex = () => {
  const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=999999&offset=0";
  const [formUrl, setFormUrl] = useState(urlBase);
  const { trainerName } = useSelector(state => state);
  return (
    <div className='pokedex__container'>
      <p className='pokedex__text'><span className='pokedex__greetings'>Welcome {trainerName}</span> here you will find your favorites pokemons.</p>
      <FormPoke setFormUrl={setFormUrl} urlBase={urlBase} />
      <PokeContainer formUrl={formUrl} />
    </div>
  );
};

export default Pokedex;