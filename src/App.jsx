import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Pauthen from './Pages/Pauthen'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Pauthen />} />
      <Route path='/register' element={<Pauthen insideRegister/>} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/*' element={<Navigate to={'/'} />} />

    </Routes>
    <Footer />
    </>
  )
}

export default App
