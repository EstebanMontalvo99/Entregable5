import React from 'react';
import "./styles/hasError.css";
const HasError = () => {
  return (
    <div className='hasError'>
      <h2>This Pokemon does not exist</h2>
      <img className='ash' src="/ash.jpg" alt="" />
    </div>
  );
};

export default HasError;