import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Main from './pages/Main'

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/dev/:id' exact element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}
