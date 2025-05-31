import type { FC } from 'react'
import { Route, Routes } from 'react-router'
import GetStart from './pages/GetStart'
import Register from './pages/Register'
import Login from './pages/Login'

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
