import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductPage from './pages/Productpage'
import Aboutpage from './pages/Aboutpage'
import WebsiteLayout from "./pages/layouts/WebsiteLayout"
import AddProduct from './pages/AddProduct'
import { ProductType } from './pages/types/product'
import { list, remove, add, update } from './api/product'
import ProductEdit from './pages/ProductEdit'
import Register from './pages/Register'
import Login from './pages/Login'
import LienHe from './pages/LienHe'

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list()
      setProducts(data);
    }
    getProducts();
  }, [])

  const removeItem = (id: number | string) => {
    remove(id);
    setProducts(products.filter(item => item._id !== id));
  }

  const onHandleAdd = (data: ProductType) => {
    add(data);
    setProducts([...products, data])
  }
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);

    // setProducts(products.map(item => item.id === data.id ? data : item ));
  }



  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="lienhe" element={<LienHe />}></Route>
            <Route path="product" element={<ProductPage products={products} onRemove={removeItem} />}></Route>
            <Route path="product/add" element={<AddProduct onAdd={onHandleAdd} />}></Route>
            <Route path="product/:id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />}></Route>
            <Route path="register" element={<Register />} ></Route>
            <Route path="login" element={<Login />} ></Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
