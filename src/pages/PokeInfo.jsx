import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import PokemonCard from '../components/PokeInfo/PokemonCard';
import Movements from '../components/PokeInfo/Movements';
import pokeInfo from "../components/PokeInfo/styles/pokeInfo.css";
import HasError from '../components/PokeInfo/HasError';

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
          ? <><HasError /><div onClick={handleClick} className="return">
            <p>{"Return"}</p>
          </div></>
          :
          <>

            <div onClick={handleClick} className="return">
              <p>{"Return"}</p>
            </div>
            <PokemonCard pokemon={pokemon} />
            <Movements pokemon={pokemon} />

          </>
      }


    </div>
  );
};

export default PokeInfo;