
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.tsx'
import Aboutus from './pages/aboutus/Aboutus.tsx'
import Shop from './pages/shop/Shop.tsx'
import Contact from './pages/contact/Contact.tsx'
import Services from './pages/services/Services.tsx'
import Plants from "./pages/shop/Plants";
import Pots from "./pages/shop/Pots";
import Fertilizer from "./pages/shop/Fertilizer";
import Tools from "./pages/shop/Tools.tsx";

import BuyNow from "./pages/shop/Buynow.tsx";


// import Hero from './componants/hero/Hero.tsx'



function App() {


  return (
    <>

<Routes>
  <Route path='/'element={<Home/>}/>
  <Route path='aboutus'element={<Aboutus/>}/>
  <Route path='shop'element={<Shop/>}/>
  <Route path='contact'element={<Contact/>}/>
  <Route path='services'element={<Services/>}/>
    <Route path="/plants" element={<Plants />} />
  <Route path="/pots" element={<Pots />} />
  <Route path="/fertilizer" element={<Fertilizer />} />
  <Route path="/tools" element={<Tools />} />
  <Route path="/buynow" element={<BuyNow />} />
</Routes>

    </>
  )
}

export default App
