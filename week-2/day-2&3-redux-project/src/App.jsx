import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductListing } from './Pages/ProductListing'
import { Header } from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={ <ProductListing />} />
      </Routes>
    </>
  )
}

export default App
