import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage.jsx'
import OurMenuPage from './Pages/OurMenu/OurMenuPage.jsx'
import {  HelmetProvider } from 'react-helmet-async';
import OurShopePage from './Pages/OurShopePage/OurShopePage.jsx'
import ShopPage from './Pages/ShopPage/ShopPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/ourmenu' element={<OurMenuPage/>}/>
          <Route path='/ourshope' element={<OurShopePage/>}/>
          <Route path='/shop/:category' element={<ShopPage/>}/>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
