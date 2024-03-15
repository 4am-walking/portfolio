import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Test from './pages/Test'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/navbar" element={<Layout />}/>
          <Route path="/test" element={<Test />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
