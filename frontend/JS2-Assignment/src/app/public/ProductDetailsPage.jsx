import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/shoppingCart/shoppingCartSlice';
import { FaBurn } from 'react-icons/fa';


function ProductDetailsPage() {

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();

  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true);

    const getProduct = async () => {
      const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products/${id}`);
      setProduct(res.data);
      setSelectedImage(res.data.images[0]); // Image that is displayed in the big image box
      setLoading(false);
    };

    getProduct();
  }, [id]);
  

  const handleClick = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className='flex justify-center items-center min-h-96'>
      {loading && <p className="text-black">Page is Loading...</p>}
      {product && (        
        <div className="inline-flex flex-col items-center border-2 border-gray-500 rounded-2xl shadow-[2px_2px_10px_black] p-8 bg-white mt-20">
          <div className="flex items-start">
            <img className="w-60 h-70 object-cover mr-4" src={selectedImage} alt={product.name} />
            <div className="max-w-[20rem]">
              <p className='text-black font-semibold underline'>{ product.name }</p>
              <p className='text-black line-clamp-6'>{product.description}</p>
              <div className='flex justify-between'>
              <p className='text-black font-bold mt-2'>{ product.price } SEK</p>
              <button onClick={handleClick} className='text-white border-2 px-5 py-1 rounded-2xl bg-blue-600 '> Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {product.images.map((image, index) => (
              <img
                className="w-full h-20 object-cover cursor-pointer"
                key={index}
                src={image}
                alt={product.name}
                onClick={() => setSelectedImage(image)} // Change selectedImage when clicked
              />
            ))}
          </div>
        </div>        
      )}
    </div>
  );
}

export default ProductDetailsPage