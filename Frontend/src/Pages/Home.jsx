import bgImage from "../assets/bgimage.jpg";
import menImg1 from "../assets/men1.jpg";
import womenImg1 from "../assets/women1.jpg";
import smartImg1 from "../assets/smart1.jpg";
import digitalImg1 from "../assets/digital.jpg"
import TopSelling from "../Components/TopSelling";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css"

export default function Home() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="     w-full h-full flex items-center justify-center px-4">
          <div className="animate-slideUp text-center max-w-2xl text-white space-y-8 mt-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Timeless Style,<br />Perfect Watches</h2>
            <p className="text-sm sm:text-base md:text-xl font-bold">Discover premium watches crafted for every occasion. Style meets precision</p>
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition " >
              <Link to="/product">Shop Now</Link></button>
          </div>
        </div></div>

      <section className=" py-12 px-4">
  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex justify-center items-center mt-6">
    Categories
  </h2>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

   
    <div className="grid grid-cols-2 gap-4 md:h-[420px]">

      <div className="relative group w-full h-full min-h-[250px]">
        <img
          src={menImg1}
          alt="Men Watches"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition">
          <p className="text-white text-lg font-semibold">Men</p>
        </div>
      </div>

      <div className="relative group w-full h-full min-h-[250px]">
        <img
          src={womenImg1}
          alt="Women Watches"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition">
          <p className="text-white text-lg font-semibold">Women</p>
        </div>
      </div>

    </div>

  
    <div className="grid grid-cols-2 gap-4 md:h-[420px] sm:flex ">

      <div className="relative group w-full h-full min-h-[200px]">
        <img
          src={digitalImg1}
          alt="Digital Watches"
          className="w-full h-full object-cover rounded-lg  "
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition">
          <p className="text-white text-lg font-semibold">Digital</p>
        </div>
      </div>

      <div className="relative group w-full h-full min-h-[200px]">
        <img
          src={smartImg1}
          alt="Smart Watches"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition">
          <p className="text-white text-lg font-semibold">Smart</p>
        </div>
      </div>

    </div>

  </div>
</section>

      <section>
        <div>
          <TopSelling products={products} />
        </div>
      </section>


      <section>
        <Footer />
      </section></>

  )
}