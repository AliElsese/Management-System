import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='home' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
