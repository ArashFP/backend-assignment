import { Outlet } from "react-router-dom"
import AuthContextProvider from "../contexts/AuthContext"
import { Provider } from "react-redux"
import { store } from "../store"
import OrderHistoryContext from "../contexts/OrderHistoryContext"
import { useContext, useState } from "react"

function RootLayout() {

  const [orderHistory, setOrderHistory] = useState([])
  
  return (
    <>
      <AuthContextProvider>
        <Provider store={store}>
          <OrderHistoryContext.Provider value={{ orderHistory, setOrderHistory }}>
            <Outlet />
          </OrderHistoryContext.Provider>
        </Provider>
      </AuthContextProvider>
    </>
  )
}
export default RootLayout