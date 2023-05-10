import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import PokemonCard from '../components/PokeInfo/PokemonCard';
import Movements from '../components/PokeInfo/Movements';
import pokeInfo from "../components/PokeInfo/styles/pokeInfo.css";

const PokeInfo = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemonByName, hasError] = useFetch(url);
  useEffect(() => {
    getPokemonByName();
  }, [name]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/pokedex");
  };
  return (
    <div className='pokeInfo'>
      {
        hasError
          ? <h1>This pokemon does not exist</h1>
          :
          <>

            <div onClick={handleClick} className="return">
              <p>{"back"}</p>
            </div>
            <PokemonCard pokemon={pokemon} />
            <Movements pokemon={pokemon} />

          </>
      }


    </div>
  );
};

export default PokeInfo;