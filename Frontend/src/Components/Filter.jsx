import { useState, useEffect } from "react";

export default function Filter({
    search,setSearch,minPrice,setMinPrice,maxPrice,setMaxPrice,sort,setSort})

{
    const [localSearch, setLocalSearch]=useState(search || "");

    useEffect(()=>{
        const delay=setTimeout(()=>{
            setSearch(localSearch);
        },300);

        return()=>clearTimeout(delay);
    },[localSearch]);

    const clearFilters=()=>{
        setLocalSearch("");
        setSearch("");
        setMinPrice("");
        setMaxPrice("");
        setSort("");
    };


    return(
        <div className="bg-gray-100 p-4 flex flex-wrap gap-4 justify-center items-center">

             <input
        type="text"
        placeholder="Search products..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        className="p-2 border rounded w-60"
      />

      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="p-2 border rounded w-32"
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="p-2 border rounded w-32"
      />

    
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Sort</option>
        <option value="low">Price: Low - High</option>
        <option value="high">Price: High - Low</option>
      </select>

      
      <button
        onClick={clearFilters}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Clear
      </button>
    </div>
  );
}
