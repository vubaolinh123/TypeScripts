import { useEffect, useState } from 'react'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './pages/client/Homepage'
import WebsiteLayout from "./pages/layouts/WebsiteLayout"
import ContactPage from './pages/client/ContactPage'
import AllProduct from './pages/client/AllProduct'
import Dashboard from './pages/admin/Dashboard'
import AdminLayout from './pages/layouts/AdminLayout'

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="contact" element={<ContactPage />}></Route>
            <Route path="product" element={<AllProduct />}></Route>
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="contact" element={<ContactPage />}></Route>
            <Route path="product" element={<AllProduct />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
