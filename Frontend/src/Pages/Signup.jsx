import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Navbar from "../Components/Navbar"
import axios from "axios"


export default function Signup() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const res = await axios.post("http://localhost:5000/signup", {
                firstname,
                lastname,
                email,
                password
            })
            alert(res.data)
            navigate("/login")
        }
        catch (error) {
            console.log(error)
            alert("Signup failed")
        }
    }


    return (
        <>
        <Navbar/>
            <section className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
  
  <div className="animate-slideUp bg-gray-200 shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md">
    
    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6">
      Signup
    </h3>


    <div className="mb-5">
      <label className="block text-gray-600 mb-1 text-sm sm:text-base font-medium">
        First Name
      </label>
      <div className="flex items-center border-b-2 border-gray-400 focus-within:border-violet-500">
        <input
          type="text"
          onChange={(e) => setFirstname(e.target.value)}
          required
          className="w-full p-2 text-sm sm:text-base outline-none bg-transparent"
        />
        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </div>
    </div>

  
    <div className="mb-5">
      <label className="block text-gray-600 mb-1 text-sm sm:text-base font-medium">
        Last Name
      </label>
      <div className="flex items-center border-b-2 border-gray-400 focus-within:border-violet-500">
        <input
          type="text"
          onChange={(e) => setLastname(e.target.value)}
          required
          className="w-full p-2 text-sm sm:text-base outline-none bg-transparent"
        />
        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </div>
    </div>

  
    <div className="mb-5">
      <label className="block text-gray-600 mb-1 text-sm sm:text-base font-medium">
        Email
      </label>
      <div className="flex items-center border-b-2 border-gray-400 focus-within:border-violet-500">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 text-sm sm:text-base outline-none bg-transparent"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </div>
    </div>


    <div className="mb-6">
      <label className="block text-gray-600 mb-1 text-sm sm:text-base font-medium">
        Password
      </label>
      <div className="flex items-center border-b-2 border-gray-400 focus-within:border-violet-500">
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 text-sm sm:text-base outline-none bg-transparent"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      </div>
    </div>

    <div className="flex justify-center">
      <button
        onClick={handleSignup}
        className="w-full sm:w-auto px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition duration-300"
      >
        Register
      </button>
    </div>

  </div>
</section>
        </>
    )
}