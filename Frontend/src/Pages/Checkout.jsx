import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar"
import "../App.css"

export default function Checkout() {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [cart, setCart]=useState([]);

  useEffect(() => {
  axios.get("http://localhost:5000/api/cart")
    .then(res => setCart(res.data))
    .catch(err => console.log(err));
}, []);

  const placeOrder = async () => {
  if (!address) {
    alert("Please enter address");
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  try {
    const res = await axios.post("http://localhost:5000/api/orders", {
      userId: "123",
      items: cart,
      totalAmount: total,
      address,
      paymentMethod
    });

    alert("Order placed successfully!");

    // clear backend cart
    await axios.delete("http://localhost:5000/api/cart");

    // clear frontend
    setCart([]);

  } catch (err) {
  console.log("ERROR:", err.response?.data || err.message);
  alert("Failed to place order");

  }
};

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex justify-center items-center bg-gray-100 ">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-md transition transform duration-300 
                hover:-translate-y-2 hover:shadow-xl 
                opacity-0 translate-y-6 animate-fadeSlideUp">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        {/* Address */}
        <textarea
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-2 mb-4 rounded "
        />

        {/* Payment */}
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        >
          <option value="COD">Cash on Delivery</option>
          <option value="ONLINE">Online Payment</option>
        </select>

        <button
          onClick={placeOrder}
          className="block w-full bg-black text-white py-2 rounded-lg text-center 
               transition-all duration-300 ease-in-out
               hover:bg-gray-700 hover:scale-105 active:scale-95"
        >
          Place Order
        </button>
      </div>
    </div>
    </>
  );
}