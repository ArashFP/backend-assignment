import { createSlice } from "@reduxjs/toolkit"



const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
}

const getTotalQuantity = (cart) => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const itemRef = state.cart.find(item => item.product._id === action.payload._id) //because action.payload has ._id at the end, the payload is expected to be an object with an _id property, which matches the structure of a product object

      itemRef 
      ? itemRef.quantity ++
      : state.cart = [...state.cart, { product: action.payload, quantity: 1}]

      state.totalQuantity = getTotalQuantity(state.cart)
    },
    removeOne: (state, action) => {

      const itemRef = state.cart.find(item => item.product._id === action.payload) //action.payload = productId
      itemRef.quantity --

      state.totalQuantity = getTotalQuantity(state.cart)
    },
    addOne: (state, action) => {

      const itemRef = state.cart.find(item => item.product._id === action.payload) //action.payload = productId
      itemRef.quantity ++

      state.totalQuantity = getTotalQuantity(state.cart)
    },
    removeItem: (state, action) => {

      state.cart = state.cart.filter(item => item.product._id !== action.payload) //Set cart to an empty array with filter method

      state.totalQuantity = getTotalQuantity(state.cart)
    },
    clearCart: (state) => {

      state.cart = [] //Set cart to en empty array
      
      state.totalQuantity = getTotalQuantity(state.cart)
    },
    calculateTotalPrice: (state) => {

      state.totalPrice = state.cart.reduce((totalPrice, item) => totalPrice + item.product.price * item.quantity, 0);

      state.totalQuantity = getTotalQuantity(state.cart)
    }
  }
})

export const { addToCart, removeOne, addOne, removeItem, calculateTotalPrice, clearCart } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer