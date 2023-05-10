import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import styles from "./styles/formPoke.css";

const FormPoke = ({ setFormUrl, urlBase }) => {
  const inputPoke = useRef();
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/type";
  const [types, getAllTypes] = useFetch(url);
  useEffect(() => {
    getAllTypes();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`;
    navigate(path);

  };
  const handleChange = (e) => {
    setFormUrl(e.target.value);

  };
  return (
    <div className='pokedex__form'>
      <form className='pokedex__form__form' onSubmit={handleSubmit}>
        <input className='pokedex__input' ref={inputPoke} type="text" />
        <button className='pokedex__btn'>Search</button>
      </form>
      <select className='pokedex__select' onChange={handleChange}>
        <option className='pokedex__option' value={urlBase}>AllPokemons</option>
        {
          types?.results.map(type => (
            <option className='pokedex__option' key={type.url} value={type.url}>{type.name}</option>
          ))
        }
      </select>
    </div>
  );
};

export default FormPoke;