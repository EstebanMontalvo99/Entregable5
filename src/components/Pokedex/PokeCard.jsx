import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import styles from "./styles/pokeCard.css"

const PokeCard = ({ url }) => {
  const [pokemon, getPokemonById] = useFetch(url);
  useEffect(() => {
    getPokemonById()
  }, [])

  console.log(pokemon);

  return (
    <article className="pokemon">

      <header className="pokemon__header">

        <img className="pokemon__sprite" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />

      </header>

      <section className="pokemon__body">

        <h3 className="pokemon__name">{pokemon?.name}</h3>

        <ul className="pokemon__types">

          {

            pokemon?.types.map(objType => (

              <li className="pokemon__type-specific" key={objType.type.url}>{objType.type.name}</li>

            ))

          }

        </ul>

        <ul className="pokemon__stats">

          {

            pokemon?.stats.map(objStat => (

              <li className="pokemon__stats-specific" key={objStat.stat.url}>

                <span className="pokemon__stats-label">{objStat.stat.name}</span>

                <span className="pokeon__stats-value">{objStat.base_stat}</span>

              </li>

            ))

          }

        </ul>

      </section>

    </article>
  )
}

export default PokeCard