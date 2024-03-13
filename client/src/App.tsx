import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './components/Test'
import Signup from './components/Signup'
import Signin from './components/Signin'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
