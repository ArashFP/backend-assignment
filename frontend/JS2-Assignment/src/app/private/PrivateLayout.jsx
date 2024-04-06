import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

function PrivateLayout() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [getAllOrders, setGetAllOrders] = useState([]);

 


  useEffect(() => {
    if (!token) return; // Exit early if token is null

    axios
      .get("https://js2-ecommerce-api.vercel.app/api/orders", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGetAllOrders(response.data);
      })
      .catch((error) => console.error("Error fetching orders:", error));
  }, [token]); // Depend on token so that useEffect runs whenever token changes

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, [token]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-200 text-black">
      <Navbar />
      {/* Account Navbar */}
      <div className="flex-grow relative"> 
        {location.pathname !== "/private/checkout" && (
          <div className="absolute top-0 bottom-0 bg-slate-600 text-white w-1/12">
            <h2 className="text-center py-2">Welcome</h2>
            <div className="bg-slate-400 flex flex-col">
              <button className="py-2 border-b-2 border-white">
                Account Information
              </button>
              <button className="py-2 border-b-2 border-white">
                Order History
              </button>
              <button className="py-2 border-b-2 border-white">
                Payment Methods
              </button>
              <button className="py-2" onClick={logout}>
                Sign out
              </button>
            </div>
          </div>
        )}
        {/* Order History */}
        {location.pathname !== "/private/checkout" && (
          <div className="pt-2" style={{ marginLeft: "calc(100% / 10)" }}>
            <h2>Your latest orders!</h2>
            {getAllOrders.map((order, index) => (
              <div
                key={index}
                className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3"
              >
                <div className="p-8">
                  <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Order {index + 1}
                  </h3>
                  {order.products.map((product, productIndex) => (
                    <div key={productIndex} className="md:flex mt-4">
                      <div className="md:flex-shrink-0">
                        <img
                          className="h-20 w-full object-cover md:w-20"
                          src={product.product.images[0]}
                          alt={product.product.name}
                        />
                      </div>
                      <div className="md:ml-6">
                        <p className="mt-2 text-gray-500">
                          Quantity: {product.quantity}
                        </p>
                        <p className="mt-2 text-gray-500">
                          Price: {product.product.price * product.quantity}
                        </p>
                        <p className="mt-2 text-gray-500">
                          Product Name: {product.product.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {location.pathname !== "/private" && <Outlet />}
      </div>
      <Footer />
    </div>
  );
}

export default PrivateLayout;