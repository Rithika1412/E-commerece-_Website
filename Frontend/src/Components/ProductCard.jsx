import axios from "axios";

export default function ProductCard({ product }) {
  const handleAddToCart = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/cart",
        product
      );
      console.log("Added to cart:", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-lg font-bold mt-2">{product.name}</h2>

      <p className="text-gray-600 text-sm">{product.description}</p>

      <p className="text-green-600 font-semibold mt-1">
        Rs.{product.price}
      </p>

      <button
        className="w-full mt-3 bg-black text-white py-2 rounded hover:bg-gray-800"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}