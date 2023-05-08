import React from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerName } from '../../store/slices/trainerName.slice'
import { useNavigate } from 'react-router-dom'

const FormUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setTrainerName(e.target.firstChild.value.trim()));
    navigate("/pokedex")
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Start</button>
    </form>
  )
}

export default FormUser