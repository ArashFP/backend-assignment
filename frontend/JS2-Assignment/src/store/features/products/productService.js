import axios from "axios"


const BASE_URL = "https://js2-ecommerce-api.vercel.app/api/products" //Api where we get our products

//Function that gets all products
const getAll = async () => {
  const res = await axios.get(BASE_URL) //variable res stores the data from api
  console.log(res.data)
  return res.data 
}


export default {
  getAll,
}