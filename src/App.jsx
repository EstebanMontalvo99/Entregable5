
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Pokedex from './pages/Pokedex'
import PokeInfo from './pages/PokeInfo'

function App() {

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:name' element={<PokeInfo />} />
          </Route>

        </Routes>

      </div>
    </>
  )
}

export default App
