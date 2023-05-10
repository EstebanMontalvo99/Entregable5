import React from 'react';
import movements from "./styles/movements.css";
const Movements = ({ pokemon }) => {
  return (
    <div className='moves'><h2 className='moves__title'>Movements</h2>
      <ul className='moves__list'>
        {
          pokemon?.moves.map(move => (
            <li key={move.move.url} className='moves__item'>{move.move.name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Movements;