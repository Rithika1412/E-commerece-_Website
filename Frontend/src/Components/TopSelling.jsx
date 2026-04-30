import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function TopSelling({ products }) {
  
  
  const topProducts = products.slice(0, 4);

  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      
      
        <h2 className="text-2xl md:text-3xl font-bold ml-30 mb-10">
          Top Selling Watches
        </h2>

        
    

      
      <div className="justify-between items-center mt-20 ml-30 mb-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mr-20 sm:mr-20  gap-6">
        {topProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
  <button className="text-md text-blue-600 hover:underline">
    <Link to="/product" className="hover:text-gray-500">
      View All
    </Link>
  </button>
</div>
        </div>

    </section>
  );
}