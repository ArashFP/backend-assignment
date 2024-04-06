import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <Link to={"/details/" + product._id } className="text-black flex flex-col items-start h-64">
      <div className="bg-white shadow-[5px_5px_10px_black] rounded-2xl p-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-110 hover:cursor-pointer" style={{ width: '225px', height: '225px' }}>
        <img className="w-full h-full object-cover" src={product.images[0]} alt={product.description} />
        <div className="flex gap-2">
          <p className="h-16">{product.name}</p>   
          <p className="font-bold">{product.price} SEK</p>
        </div>
      </div>
    </Link>
  )
}
export default ProductCard