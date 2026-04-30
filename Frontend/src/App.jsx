import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Cart from "./Pages/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./Pages/Product"
import ProductCard from "./components/ProductCard"
import Checkout from "./Pages/Checkout"
export default function App(){

  return(
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/productcard" element={<ProductCard/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    </Routes></BrowserRouter>
    </>
  )
}
