import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import Filter from "../Components/Filter";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice]=useState("");
  const [maxPrice, setMaxPrice]=useState("");
  const [sort, setSort]=useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load products");
      });
  }, []);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )
  .filter((item)=>minPrice ? item.price >=Number(minPrice):true)
  .filter((item)=>maxPrice?item.price <= Number(maxPrice):true)
  .sort((a,b)=>{
    if(sort === "low") return a.price-b.price;
    if(sort === "high")return b.price-a.price;
    return 0;
  });

  if (!products.length && !error) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  if (error) {
    return (
      <h2 className="text-center mt-10 text-red-500">{error}</h2>
    );
  }

  return (
    <>
    
      <Navbar setSearch={setSearch} />
      <Filter
      search={search}
      setSearch={setSearch}
      minPrice={minPrice}
      setMinPrice={setMinPrice}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
      sort={sort}
      setSort={setSort}
    />
      <section className="mx-20">
      <h2 className="text-4xl font-bold p-6">Our Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 pb-10">
        {filteredProducts.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
      </section>
    </>
  );
}