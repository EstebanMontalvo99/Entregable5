import React, { useRef } from 'react'

const FormPoke = () => {
  const inputPoke = useRef()

  const handleSubmit = e => {
    e.preventDefault()
      (inputPoke.current.value.trim().toLowerCase());
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputPoke} type="text" />
        <button>Search</button>
      </form>
      <select id="">
        <option value="allPokemons">AllPokemons</option>
      </select>
    </div>
  )
}

export default FormPoke