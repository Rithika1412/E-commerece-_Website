import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../App.css"

export default function Cart() {
    const [cart, setCart] = useState([])


    useEffect(() => {
        axios.get("http://localhost:5000/api/cart")
            .then(res => setCart(res.data))
            .catch(err => console.log(err));
    }, []);

    const removeItem = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/cart/${id}`);
            setCart(cart.filter((item) => item._id !== id));
        }
        catch (err) {
            console.log(err);

        }
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);


    return (
        <>
            <Navbar />
            <section >
            <div className="min-h-screen p-4 md:p-10 mx-20 ">
                <div className="text-2xl md:text-3xl font-bold mb-6 flex gap-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-8 w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg></div>

                {cart.length === 0 ? (
                    <p className="text-gray-600">Your Cart is Empty</p>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6 ">
                        <div className="md:col-span-2 space-y-4 -mt-10">
                           {cart.map((item, index) => (
  <div
    key={item._id}
    style={{ animationDelay: `${index * 0.1}s` }}
    className="bg-blue-50 p-4 rounded-lg shadow flex items-center gap-4 
               opacity-0 translate-y-10 animate-fadeSlideUp hover:-translate-x-1 hover:sclae-110 "
  >
   
                                    <img src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-md" />

                                    <div className="flex-1">
                                        <h2 className="font-semibold">{item.name}</h2>
                                        <p className="text-gray-600">{item.price}</p>

                                    </div>

                                    <button
                                        onClick={() => removeItem(item._id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>


                        <div className="bg-blue-50 p-6 rounded-lg shadow h-fit">

  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

  <div className="flex justify-between mb-2">
    <span>Total Items</span>
    <span>{cart.length}</span>
  </div>

  <div className="flex justify-between mb-4">
    <span>Total Price</span>
    <span className="font-bold">Rs.{total}</span>
  </div>

  <Link
    to="/checkout"
    className="block w-full bg-black text-white py-2 rounded-lg text-center 
               transition-all duration-300 ease-in-out
               hover:bg-gray-700 hover:scale-105 active:scale-95"
  >
    Proceed to Checkout
  </Link>

</div>
                    </div>
                )}
            </div>
            </section>                                                                                      


        </>
    );
}



