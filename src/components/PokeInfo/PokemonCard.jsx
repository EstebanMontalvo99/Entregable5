import React from 'react';
import pokemonCard from "./styles/pokeCard.css";
const PokemonCard = ({ pokemon }) => {



  return (
    <div className='pokemonCard'>
      <header className={`pokemonCard__header bg-${pokemon?.types[0].type.name}`}>
        {<img className='pokemon__img' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />}
      </header>
      <section className='pokemon__main__info'>
        <h2 className={`pokemon__id color-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h2>
        <h2 className={`pokemon__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
        <ul className='pokemon__list__body'>
          <li className='pokemon__item'><span>Weight: </span><span className='pokemon__item__stat'>{pokemon?.weight}</span></li>
          <li className='pokemon__item'><span>Heigth: </span><span className='pokemon__item__stat'>{pokemon?.height}</span></li>
        </ul>
      </section>
      <section className='pokemon__type-habilities'>
        <div className="type">
          <h3>Type</h3>
          <ul className='type__list'>
            {
              pokemon?.types.map(type => (
                <li className={`type__item bg-${type.type.name}`} key={type.type.url}> {type.type.name}</li>
              ))
            }
          </ul>
        </div>
        <div className="habilities">
          <h3>Habilities</h3>
          <ul className='habilities__list'>
            {
              pokemon?.abilities.map(ability => (
                <li className='habilities__item' key={ability.ability.url}> {ability.ability.name}</li>
              ))
            }
          </ul>
        </div>
      </section >
      <section className='stats'>
        <h2 className='stats__title'>Stats</h2>
        <ul className='stats__list'>
          {
            pokemon?.stats.map(statInfo => (
              <div key={statInfo.stat.url}><li className='stats__item'><span> {statInfo.stat.name} </span> <span>{statInfo.base_stat}/150</span></li><div className="statBar" style={{ width: `calc(100/150 * ${statInfo.base_stat}%)` }} ></div></div>
            ))
          }
        </ul>
      </section>
    </div >
  );
};

export default PokemonCard;