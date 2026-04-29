import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ setSearch }) {
  const [input, setInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setInput(value);
    setSearch(value);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
    
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
 
        <h1 className="text-2xl font-bold ml-10 ">ChronosVault</h1>

       

        <div className="hidden md:flex items-center gap-8 font-bold ">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/product" className="hover:text-gray-500">Product</Link>
          <Link to="/cart" className="hover:text-gray-500">Cart</Link>
          <Link to="/login" className="hover:text-gray-500">Login</Link>
          <Link to="/signup" className="hover:text-gray-500">Signup</Link>
          
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          
          

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/product" onClick={() => setMenuOpen(false)}>Product</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
          
        </div>
      )}
    </nav>
  );
}