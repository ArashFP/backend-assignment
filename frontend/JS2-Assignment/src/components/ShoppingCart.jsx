import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { calculateTotalPrice, clearCart } from "../store/features/shoppingCart/shoppingCartSlice";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import OrderHistoryContext from "../contexts/OrderHistoryContext";

export const ShoppingCart = ({ isCheckoutPage, setIsOpen }) => {
  const { cart, totalPrice } = useSelector(state => state.shoppingCart);
  const dispatch = useDispatch();
  const { token } = useAuth();
  const [message, setMessage] = useState(''); 
  const [postMade, setPostMade] = useState(false);
  const { setOrderHistory } = useContext(OrderHistoryContext);
 

  const clearCartEntirely = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [cart, dispatch]);

  const placeOrder = async () => {
    const response = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        products: cart.map(item => ({
          productId: item.product._id,
          quantity: item.quantity
        }))
      })
    });
  
    const responseData = await response.json();
  
    if (!response.ok) {
      setMessage('Something went wrong with your order. Please try again or contact support!'); 
    } else {
      setMessage('Your order has been placed!');
      setOrderHistory(prevOrders => [...prevOrders, responseData]);
      clearCartEntirely();
    }
  
    console.log(responseData);
  
    setPostMade(true);
  };

  return (
    <div>

      <div>
        { cart.length < 1 && (
          <div className="text-black text-center py-10">
            <p> Cart is Empty </p>
          </div>
        )}
        { cart.map(item => (
          <CartItem key={item.product._id} item={item}/>
        ))}
      </div>

      <hr className="border-gray-500"/>

      <div className="flex justify-between items-center p-2">
        <div className="text-black">
          <p>Total Price: {totalPrice}SEK</p>
          <small className="text-gray-400">Inkl. vat</small>
        </div>
        <div className="flex gap-2">
          <button onClick={clearCartEntirely} className="bg-orange-700 font-medium px-3 rounded-2xl hover:bg-orange-400 transition-[900ms]"> Clear Cart</button>
          { isCheckoutPage &&
            <button onClick={() => { placeOrder(); clearCartEntirely(); }} className="bg-orange-700 font-medium px-3 rounded-2xl hover:bg-orange-400 transition-[900ms]"> Place Order</button>
          }
          { !isCheckoutPage && 
            <Link onClick={() => setIsOpen(false)} to="/private/checkout" className="bg-orange-700 font-medium px-3 rounded-2xl hover:bg-orange-500 transition-[900ms]"> Checkout </Link>
          }          
        </div>

      </div>
      
      {isCheckoutPage && postMade &&
        <div className="flex justify-center items-center">
          <div className="bg-blue-900 w-56 h-auto py-1 text-center rounded-lg text-white">
            <p>{message}</p>
          </div>
        </div>
      }
    </div>
  )
}