import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage.jsx'
import OurMenuPage from './Pages/OurMenu/OurMenuPage.jsx'
import {  HelmetProvider } from 'react-helmet-async';
import OurShopePage from './Pages/OurShopePage/OurShopePage.jsx'
import ShopPage from './Pages/ShopPage/ShopPage.jsx'
import Login from './FormLoginSignup/Login/Login.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import SignUp from './FormLoginSignup/SignUp/SignUp.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CartPage from './DashBoard/Pages/CartPage.jsx'
import DashBoard from './DashBoard/DashBoard.jsx'
import AddItemPage from './DashBoard/Pages/AddItemPage.jsx'
import Allusers from './DashBoard/Allusers/Allusers.jsx'
import AdminRoute from './Private/AdminRoute.jsx'
import ManageItem from './DashBoard/Pages/ManageItem.jsx'
import Paymeny from './DashBoard/Payment/Paymeny.jsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
         <QueryClientProvider client={queryClient}>
           <AuthProvider>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/ourmenu' element={<OurMenuPage />} />
              <Route path='/ourshope' element={<OurShopePage />} />
              <Route path='/shop/:category' element={<ShopPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />

              {/* Dashboard with nested routes */}
              <Route path='/dashboard' element={<DashBoard />}>
                <Route index element={<CartPage />} />
                <Route path='cart' element={<CartPage />} />
                <Route path='payment' element={<Paymeny />} />
                {/* admin panel  */}
                <Route path='additem' element={<AdminRoute><AddItemPage /></AdminRoute>} />
                <Route path='allusers' element={<AdminRoute><Allusers/></AdminRoute>}/>
                <Route path='manageitem' element={<AdminRoute><ManageItem/></AdminRoute>}/>
              </Route>
            </Routes>
           </AuthProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
